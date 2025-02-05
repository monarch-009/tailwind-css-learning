export default function TransformDemo() {
    return (
        <div className="p-6 space-y-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">Tailwind CSS Transform Properties</h2>

            {/* Rotate */}
            <div className="p-6 rounded-md bg-blue-100">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Rotate</h3>
                <div className="flex gap-4">
                    <div className="w-24 h-24 bg-blue-500 flex items-center justify-center text-white transform rotate-0">
                        rotate-0
                    </div>
                    <div className="w-24 h-24 bg-blue-500 flex items-center justify-center text-white transform rotate-45">
                        rotate-45
                    </div>
                    <div className="w-24 h-24 bg-blue-500 flex items-center justify-center text-white transform rotate-90">
                        rotate-90
                    </div>
                    <div className="w-24 h-24 bg-blue-500 flex items-center justify-center text-white transform rotate-180">
                        rotate-180
                    </div>
                </div>
            </div>

            {/* Scale */}
            <div className="p-6 rounded-md bg-green-100">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Scale</h3>
                <div className="flex gap-4">
                    <div className="w-24 h-24 bg-green-500 flex items-center justify-center text-white transform scale-100">
                        scale-100
                    </div>
                    <div className="w-24 h-24 bg-green-500 flex items-center justify-center text-white transform scale-75">
                        scale-75
                    </div>
                    <div className="w-24 h-24 bg-green-500 flex items-center justify-center text-white transform scale-125">
                        scale-125
                    </div>
                    <div className="w-24 h-24 bg-green-500 flex items-center justify-center text-white transform scale-150">
                        scale-150
                    </div>
                </div>
            </div>

            {/* Skew */}
            <div className="p-6 rounded-md bg-yellow-100">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Skew</h3>
                <div className="flex gap-4">
                    <div className="w-24 h-24 bg-yellow-500 flex items-center justify-center text-white transform skew-x-0">
                        skew-x-0
                    </div>
                    <div className="w-24 h-24 bg-yellow-500 flex items-center justify-center text-white transform skew-x-12">
                        skew-x-12
                    </div>
                    <div className="w-24 h-24 bg-yellow-500 flex items-center justify-center text-white transform skew-y-0">
                        skew-y-0
                    </div>
                    <div className="w-24 h-24 bg-yellow-500 flex items-center justify-center text-white transform skew-y-12">
                        skew-y-12
                    </div>
                </div>
            </div>

            {/* Translate */}
            <div className="p-6 rounded-md bg-purple-100">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Translate</h3>
                <div className="flex gap-4">
                    <div className="w-24 h-24 bg-purple-500 flex items-center justify-center text-white transform translate-x-0">
                        translate-x-0
                    </div>
                    <div className="w-24 h-24 bg-purple-500 flex items-center justify-center text-white transform translate-x-8">
                        translate-x-8
                    </div>
                    <div className="w-24 h-24 bg-purple-500 flex items-center justify-center text-white transform translate-y-0">
                        translate-y-0
                    </div>
                    <div className="w-24 h-24 bg-purple-500 flex items-center justify-center text-white transform translate-y-8">
                        translate-y-8
                    </div>
                </div>
            </div>

            {/* Transform Origin */}
            <div className="p-6 rounded-md bg-red-100">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Transform Origin</h3>
                <div className="flex gap-4">
                    <div className="w-24 h-24 bg-red-500 flex items-center justify-center text-white transform origin-center rotate-45">
                        origin-center
                    </div>
                    <div className="w-24 h-24 bg-red-500 flex items-center justify-center text-white transform origin-top rotate-45">
                        origin-top
                    </div>
                    <div className="w-24 h-24 bg-red-500 flex items-center justify-center text-white transform origin-bottom rotate-45">
                        origin-bottom
                    </div>
                    <div className="w-24 h-24 bg-red-500 flex items-center justify-center text-white transform origin-left rotate-45">
                        origin-left
                    </div>
                </div>
            </div>

            {/* Perspective */}
            <div className="p-6 rounded-md bg-indigo-100">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Perspective</h3>
                <div className="flex gap-4">
                    <div className="w-24 h-24 bg-indigo-500 flex items-center justify-center text-white transform perspective-none rotate-y-45">
                        perspective-none
                    </div>
                    <div className="w-24 h-24 bg-indigo-500 flex items-center justify-center text-white transform perspective-500 rotate-y-45">
                        perspective-500
                    </div>
                    <div className="w-24 h-24 bg-indigo-500 flex items-center justify-center text-white transform perspective-1000 rotate-y-45">
                        perspective-1000
                    </div>
                </div>
            </div>

            {/* Perspective Origin */}
            <div className="p-6 rounded-md bg-pink-100">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Perspective Origin</h3>
                <div className="flex gap-4">
                    <div className="w-24 h-24 bg-pink-500 flex items-center justify-center text-white transform perspective-500 perspective-origin-center rotate-y-45">
                        origin-center
                    </div>
                    <div className="w-24 h-24 bg-pink-500 flex items-center justify-center text-white transform perspective-500 perspective-origin-top rotate-y-45">
                        origin-top
                    </div>
                    <div className="w-24 h-24 bg-pink-500 flex items-center justify-center text-white transform perspective-500 perspective-origin-bottom rotate-y-45">
                        origin-bottom
                    </div>
                    <div className="w-24 h-24 bg-pink-500 flex items-center justify-center text-white transform perspective-500 perspective-origin-left rotate-y-45">
                        origin-left
                    </div>
                </div>
            </div>

            {/* Transform Style */}
            <div className="p-6 rounded-md bg-gray-100">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Transform Style</h3>
                <div className="flex gap-4">
                    <div className="w-24 h-24 bg-gray-500 flex items-center justify-center text-white transform transform-flat rotate-y-45">
                        transform-flat
                    </div>
                    <div className="w-24 h-24 bg-gray-500 flex items-center justify-center text-white transform transform-preserve-3d rotate-y-45">
                        transform-preserve-3d
                    </div>
                </div>
            </div>

            {/* Backface Visibility */}
            <div className="p-6 rounded-md bg-teal-100">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Backface Visibility</h3>
                <div className="flex gap-4">
                    <div className="w-24 h-24 bg-teal-500 flex items-center justify-center text-white transform rotate-y-180 backface-visible">
                        backface-visible
                    </div>
                    <div className="w-24 h-24 bg-teal-500 flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                        backface-hidden
                    </div>
                </div>
            </div>
        </div>
    );
}