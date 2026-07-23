
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12">
            <div className="mb-8 text-center">
                <Link href="/">
                    <div className="flex flex-col items-center gap-2">
                        <div
                            className="flex items-center justify-center w-16 h-16 rounded-2xl text-white font-black text-2xl shadow-lg"
                            style={{ background: "linear-gradient(135deg, #0C2D4F 0%, #1E5BA8 100%)" }}
                        >
                            M
                        </div>
                        <div className="text-center">
                            <p className="text-[#1A3A5C] font-black text-lg leading-tight">MASTER MEP</p>
                            <p className="text-gray-500 text-xs tracking-widest uppercase">Solution Co., Ltd</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="w-full max-w-md bg-white px-8 py-8 shadow-md rounded-2xl border border-gray-100">
                {children}
            </div>
        </div>
    );
}