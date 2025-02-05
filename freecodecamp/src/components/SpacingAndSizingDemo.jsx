export default function SpacingAndSizingDemo() {
    return (
      <div className="p-6 space-y-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Tailwind Spacing & Sizing</h2>
  
        {/* Margin & Padding Example */}
        <div className="bg-blue-300 p-6 m-4 rounded-md">
          This box has <strong>p-6</strong> (padding) and <strong>m-4</strong> (margin).
        </div>
  
        {/* Width & Height Example */}
        <div className="w-64 h-32 bg-green-400 flex items-center justify-center text-white rounded-md">
          w-64 h-32
        </div>
  
        <div className="w-1/2 h-16 bg-red-400 flex items-center justify-center text-white rounded-md">
          w-1/2 h-16
        </div>
  
        {/* Max Width & Min Height Example */}
        <div className="max-w-md min-h-24 bg-yellow-300 p-4 rounded-md">
          This box has <strong>max-w-md</strong> and <strong>min-h-24</strong>.
        </div>
  
        {/* Spacing Between Elements */}
        <div className="flex space-x-4">
          <div className="w-16 h-16 bg-purple-500 text-white flex items-center justify-center rounded-md">
            Box 1
          </div>
          <div className="w-16 h-16 bg-purple-700 text-white flex items-center justify-center rounded-md">
            Box 2
          </div>
          <div className="w-16 h-16 bg-purple-900 text-white flex items-center justify-center rounded-md">
            Box 3
          </div>
        </div>
  
        <div className="flex flex-col space-y-4">
          <div className="w-full h-12 bg-gray-400 text-white flex items-center justify-center rounded-md">
            Row 1
          </div>
          <div className="w-full h-12 bg-gray-500 text-white flex items-center justify-center rounded-md">
            Row 2
          </div>
          <div className="w-full h-12 bg-gray-600 text-white flex items-center justify-center rounded-md">
            Row 3
          </div>
        </div>
      </div>
    );
  }
  