// components/EffectsDemo.jsx

export default function EffectsDemo() {
    return (
      <div className="p-6 space-y-6 max-w-2xl mx-auto">
  
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Tailwind CSS Effects</h1>
  
        {/* Box Shadow Effects */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-sm mb-6">
          Box Shadow: Small
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md mb-6">
          Box Shadow: Medium
        </div>
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg mb-6">
          Box Shadow: Large
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-xl mb-6">
          Box Shadow: Extra Large
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-2xl mb-6">
          Box Shadow: 2x Large
        </div>
  
        {/* Opacity Effects */}
        <div className="bg-gray-500 text-white p-6 rounded-lg opacity-100 mb-6">
          Opacity: 100%
        </div>
        <div className="bg-gray-500 text-white p-6 rounded-lg opacity-75 mb-6">
          Opacity: 75%
        </div>
        <div className="bg-gray-500 text-white p-6 rounded-lg opacity-50 mb-6">
          Opacity: 50%
        </div>
        <div className="bg-gray-500 text-white p-6 rounded-lg opacity-25 mb-6">
          Opacity: 25%
        </div>
        <div className="bg-gray-500 text-white p-6 rounded-lg opacity-0 mb-6">
          Opacity: 0% (Invisible)
        </div>
  
        {/* Mix Blend Mode */}
        <div className="bg-red-500 text-white p-6 rounded-lg mix-blend-normal mb-6">
          Mix Blend Mode: Normal
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg mix-blend-multiply mb-6">
          Mix Blend Mode: Multiply
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg mix-blend-screen mb-6">
          Mix Blend Mode: Screen
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg mix-blend-overlay mb-6">
          Mix Blend Mode: Overlay
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg mix-blend-difference mb-6">
          Mix Blend Mode: Difference
        </div>
  
        {/* Background Blend Mode */}
        <div className="bg-gradient-to-r from-red-500 to-yellow-500 bg-blend-normal text-white p-6 rounded-lg mb-6">
          Background Blend Mode: Normal
        </div>
        <div className="bg-gradient-to-r from-green-500 to-blue-500 bg-blend-multiply text-white p-6 rounded-lg mb-6">
          Background Blend Mode: Multiply
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 bg-blend-screen text-white p-6 rounded-lg mb-6">
          Background Blend Mode: Screen
        </div>
        <div className="bg-gradient-to-r from-indigo-500 to-red-500 bg-blend-overlay text-white p-6 rounded-lg mb-6">
          Background Blend Mode: Overlay
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-teal-500 bg-blend-difference text-white p-6 rounded-lg mb-6">
          Background Blend Mode: Difference
        </div>
  
      </div>
    );
  }
  