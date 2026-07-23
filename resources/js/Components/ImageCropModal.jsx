import { useState, useCallback, useRef } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/Utils/cropImage';

export default function ImageCropModal({ imageSrc, aspect = 4 / 3, fileName = 'cropped.jpg', onCancel, onSave }) {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [containerSize, setContainerSize] = useState(null);
    const containerRef = useRef(null);

    const onMediaLoaded = useCallback((mediaSize) => {
        const el = containerRef.current;
        if (!el) return;
        const cw = el.clientWidth;
        const ch = el.clientHeight;
        if (!cw || !ch || !mediaSize?.naturalWidth || !mediaSize?.naturalHeight) return;
        const fit = Math.max(cw / mediaSize.naturalWidth, ch / mediaSize.naturalHeight);
        setZoom(Math.max(1, fit));
        setContainerSize({ width: cw, height: ch });
    }, []);

    const onCropComplete = useCallback((_croppedArea, croppedAreaPixelsValue) => {
        setCroppedAreaPixels(croppedAreaPixelsValue);
    }, []);

    const handleSave = async () => {
        if (!croppedAreaPixels) return;
        setProcessing(true);
        try {
            const file = await getCroppedImg(imageSrc, croppedAreaPixels, fileName);
            onSave(file);
        } catch (err) {
            console.error(err);
            setProcessing(false);
        }
    };

    const cropperExtraProps = aspect != null
        ? { aspect }
        : { cropSize: containerSize ?? { width: 400, height: 300 } };

    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl w-full max-w-2xl overflow-hidden">
                <div className="px-5 py-4 border-b flex items-center justify-between">
                    <h3 className="font-semibold text-[#1A3A5C]">Crop Image</h3>
                    <button type="button" onClick={onCancel} className="text-gray-400 hover:text-gray-600 text-sm">
                        ✕
                    </button>
                </div>

                <div ref={containerRef} className="relative w-full h-72 sm:h-96 bg-gray-900">
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={onCropComplete}
                        onMediaLoaded={onMediaLoaded}
                        {...cropperExtraProps}
                    />
                </div>

                <div className="px-5 py-4 space-y-4">
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Zoom</label>
                        <input
                            type="range"
                            min={1}
                            max={3}
                            step={0.1}
                            value={zoom}
                            onChange={(e) => setZoom(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>

                    <div className="flex justify-end gap-3">
                        <button type="button" onClick={onCancel} className="px-4 py-2 text-sm rounded-lg border text-gray-600 hover:bg-gray-50">
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={handleSave}
                            disabled={processing}
                            className="px-4 py-2 text-sm rounded-lg bg-[#1A3A5C] text-white hover:bg-[#12283f] disabled:opacity-50"
                        >
                            {processing ? 'Saving...' : 'Save Crop'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
