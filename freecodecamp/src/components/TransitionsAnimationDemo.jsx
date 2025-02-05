// components/TransitionsAnimationDemo.jsx

export default function TransitionsAnimationDemo() {
    return (
        <div className="p-6 space-y-6 max-w-2xl mx-auto">

            {/* Heading */}
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Tailwind CSS Transitions & Animations</h1>

            {/* Transition Property */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transition Property</h2>
                <div className="w-32 h-32 bg-blue-500 transition-all duration-500 hover:bg-red-500">
                    <p className="text-white text-center p-12">Hover me!</p>
                </div>
            </div>

            {/* Transition Duration */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transition Duration</h2>
                <div className="w-32 h-32 bg-green-500 transition-colors duration-1000 hover:bg-yellow-500">
                    <p className="text-white text-center p-12">Hover me!</p>
                </div>
            </div>

            {/* Transition Timing Function */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transition Timing Function</h2>
                <div className="w-32 h-32 bg-purple-500 transition-all duration-500 ease-in-out hover:bg-pink-500">
                    <p className="text-white text-center p-12">Hover me!</p>
                </div>
            </div>

            {/* Transition Delay */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transition Delay</h2>
                <div className="w-32 h-32 bg-indigo-500 transition-all delay-200 hover:bg-orange-500">
                    <p className="text-white text-center p-12">Hover me!</p>
                </div>
            </div>

            {/* Transition Behavior */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transition Behavior</h2>
                <div className="w-32 h-32 bg-teal-500 transition-transform duration-500 ease-in-out hover:scale-110">
                    <p className="text-white text-center p-12">Hover me!</p>
                </div>
            </div>

            {/* Animation */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Animations</h2>

                {/* Bouncing Animation */}
                <div className="w-32 h-32 bg-red-500 animate-bounce mb-4">
                    <p className="text-white text-center p-12">Bouncing!</p>
                </div>

                {/* Pulsing Animation */}
                <div className="w-32 h-32 bg-yellow-500 animate-pulse mb-4">
                    <p className="text-white text-center p-12">Pulsing!</p>
                </div>

                {/* Spinning Animation */}
                <div className="w-32 h-32 bg-blue-500 animate-spin mb-4">
                    <p className="text-white text-center p-12">Spinning!</p>
                </div>

                {/* Ping Animation */}
                <div className="w-32 h-32 bg-green-500 animate-ping mb-4">
                    <p className="text-white text-center p-12">Ping!</p>
                </div>

                {/* Shake Animation */}
                <div className="w-32 h-32 bg-purple-500 animate-shake mb-4">
                    <p className="text-white text-center p-12">Shaking!</p>
                </div>

                {/* Bounce In Animation */}
                <div className="w-32 h-32 bg-teal-500 animate-bounceIn mb-4">
                    <p className="text-white text-center p-12">Bounce In!</p>
                </div>

                {/* Fade In Animation */}
                <div className="w-32 h-32 bg-gray-500 animate-fadeIn mb-4">
                    <p className="text-white text-center p-12">Fade In!</p>
                </div>

                {/* Slide In Animation */}
                <div className="w-32 h-32 bg-indigo-500 animate-slideIn mb-4">
                    <p className="text-white text-center p-12">Slide In!</p>
                </div>

            </div>

        </div>
    );
}
