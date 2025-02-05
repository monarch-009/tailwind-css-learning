export default function SvgDemo() {
    return (
        <div className="p-6 space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800">Tailwind CSS SVG Utilities</h2>

            <div className="flex space-x-6 items-center">
                {/* Filled SVG */}
                <svg className="w-16 h-16 fill-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                </svg>
                <p className="text-lg">This star uses <strong>fill-blue-500</strong>.</p>
            </div>

            <div className="flex space-x-6 items-center">
                {/* Stroked SVG */}
                <svg className="w-16 h-16 stroke-red-500 stroke-2 fill-none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
                <p className="text-lg">This circle has a <strong>red stroke</strong> and no fill.</p>
            </div>

            <div className="flex space-x-6 items-center">
                {/* Custom Stroke Width */}
                <svg className="w-16 h-16 stroke-green-500 stroke-4 fill-none" viewBox="0 0 24 24">
                    <line x1="4" y1="12" x2="20" y2="12" />
                </svg>
                <p className="text-lg">This line has a <strong>thicker stroke</strong>.</p>
            </div>
        </div>
    );
}
