import { Link } from "@inertiajs/react";

export default function BackToDashboard() {
  return (
    <Link
      href={route('dashboard')}
      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#1A3A5C] transition-colors mb-4"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to Dashboard
    </Link>
  );
}