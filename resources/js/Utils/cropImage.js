export async function getCroppedImg(
    imageSrc,
    croppedAreaPixels,
    fileName = 'cropped.jpg',
    { maxDimension = 1600, quality = 0.85, mimeType = 'image/jpeg' } = {}
) {
    const image = await loadImage(imageSrc);
    const { x, y, width: cropWidth, height: cropHeight } = croppedAreaPixels;

    const scale = Math.min(1, maxDimension / Math.max(cropWidth, cropHeight));
    const outputWidth = Math.round(cropWidth * scale);
    const outputHeight = Math.round(cropHeight * scale);

    const canvas = document.createElement('canvas');
    canvas.width = outputWidth;
    canvas.height = outputHeight;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
        image,
        x, y, cropWidth, cropHeight,
        0, 0, outputWidth, outputHeight
    );

    const blob = await new Promise((resolve, reject) => {
        canvas.toBlob(
            (b) => (b ? resolve(b) : reject(new Error('Canvas export failed'))),
            mimeType,
            quality
        );
    });

    const finalName = fileName.replace(/\.(png|jpe?g|webp)$/i, '') + '.jpg';
    return new File([blob], finalName, { type: mimeType });
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}