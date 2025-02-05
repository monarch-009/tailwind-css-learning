export default function BorderDemo() {
    return (
      <div className="p-6 space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Tailwind CSS Border Properties</h2>
  
        {/* Border Radius */}
        <div className="p-6 rounded-md bg-blue-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Border Radius</h3>
          <div className="flex gap-4">
            <div className="w-24 h-24 bg-blue-500 rounded-none flex items-center justify-center text-white">
              rounded-none
            </div>
            <div className="w-24 h-24 bg-blue-500 rounded-sm flex items-center justify-center text-white">
              rounded-sm
            </div>
            <div className="w-24 h-24 bg-blue-500 rounded-md flex items-center justify-center text-white">
              rounded-md
            </div>
            <div className="w-24 h-24 bg-blue-500 rounded-lg flex items-center justify-center text-white">
              rounded-lg
            </div>
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white">
              rounded-full
            </div>
          </div>
        </div>
  
        {/* Border Width */}
        <div className="p-6 rounded-md bg-green-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Border Width</h3>
          <div className="flex gap-4">
            <div className="w-24 h-24 border-0 bg-green-500 flex items-center justify-center text-white">
              border-0
            </div>
            <div className="w-24 h-24 border-2 bg-green-500 flex items-center justify-center text-white">
              border-2
            </div>
            <div className="w-24 h-24 border-4 bg-green-500 flex items-center justify-center text-white">
              border-4
            </div>
            <div className="w-24 h-24 border-8 bg-green-500 flex items-center justify-center text-white">
              border-8
            </div>
          </div>
        </div>
  
        {/* Border Color */}
        <div className="p-6 rounded-md bg-yellow-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Border Color</h3>
          <div className="flex gap-4">
            <div className="w-24 h-24 border-4 border-red-500 bg-yellow-500 flex items-center justify-center text-white">
              border-red-500
            </div>
            <div className="w-24 h-24 border-4 border-blue-500 bg-yellow-500 flex items-center justify-center text-white">
              border-blue-500
            </div>
            <div className="w-24 h-24 border-4 border-green-500 bg-yellow-500 flex items-center justify-center text-white">
              border-green-500
            </div>
            <div className="w-24 h-24 border-4 border-purple-500 bg-yellow-500 flex items-center justify-center text-white">
              border-purple-500
            </div>
          </div>
        </div>
  
        {/* Border Style */}
        <div className="p-6 rounded-md bg-purple-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Border Style</h3>
          <div className="flex gap-4">
            <div className="w-24 h-24 border-4 border-solid border-purple-500 bg-purple-200 flex items-center justify-center text-white">
              border-solid
            </div>
            <div className="w-24 h-24 border-4 border-dashed border-purple-500 bg-purple-200 flex items-center justify-center text-white">
              border-dashed
            </div>
            <div className="w-24 h-24 border-4 border-dotted border-purple-500 bg-purple-200 flex items-center justify-center text-white">
              border-dotted
            </div>
            <div className="w-24 h-24 border-4 border-double border-purple-500 bg-purple-200 flex items-center justify-center text-white">
              border-double
            </div>
          </div>
        </div>
  
        {/* Outline Width */}
        <div className="p-6 rounded-md bg-red-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Outline Width</h3>
          <div className="flex gap-4">
            <div className="w-24 h-24 outline-0 bg-red-500 flex items-center justify-center text-white">
              outline-0
            </div>
            <div className="w-24 h-24 outline-2 outline-red-500 bg-red-500 flex items-center justify-center text-white">
              outline-2
            </div>
            <div className="w-24 h-24 outline-4 outline-red-500 bg-red-500 flex items-center justify-center text-white">
              outline-4
            </div>
            <div className="w-24 h-24 outline-8 outline-red-500 bg-red-500 flex items-center justify-center text-white">
              outline-8
            </div>
          </div>
        </div>
  
        {/* Outline Color */}
        <div className="p-6 rounded-md bg-indigo-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Outline Color</h3>
          <div className="flex gap-4">
            <div className="w-24 h-24 outline-4 outline-red-500 bg-indigo-500 flex items-center justify-center text-white">
              outline-red-500
            </div>
            <div className="w-24 h-24 outline-4 outline-blue-500 bg-indigo-500 flex items-center justify-center text-white">
              outline-blue-500
            </div>
            <div className="w-24 h-24 outline-4 outline-green-500 bg-indigo-500 flex items-center justify-center text-white">
              outline-green-500
            </div>
            <div className="w-24 h-24 outline-4 outline-purple-500 bg-indigo-500 flex items-center justify-center text-white">
              outline-purple-500
            </div>
          </div>
        </div>
  
        {/* Outline Style */}
        <div className="p-6 rounded-md bg-pink-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Outline Style</h3>
          <div className="flex gap-4">
            <div className="w-24 h-24 outline-4 outline-solid outline-pink-500 bg-pink-200 flex items-center justify-center text-white">
              outline-solid
            </div>
            <div className="w-24 h-24 outline-4 outline-dashed outline-pink-500 bg-pink-200 flex items-center justify-center text-white">
              outline-dashed
            </div>
            <div className="w-24 h-24 outline-4 outline-dotted outline-pink-500 bg-pink-200 flex items-center justify-center text-white">
              outline-dotted
            </div>
            <div className="w-24 h-24 outline-4 outline-double outline-pink-500 bg-pink-200 flex items-center justify-center text-white">
              outline-double
            </div>
          </div>
        </div>
  
        {/* Outline Offset */}
        <div className="p-6 rounded-md bg-gray-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Outline Offset</h3>
          <div className="flex gap-4">
            <div className="w-24 h-24 outline-4 outline-red-500 outline-offset-0 bg-gray-500 flex items-center justify-center text-white">
              outline-offset-0
            </div>
            <div className="w-24 h-24 outline-4 outline-red-500 outline-offset-2 bg-gray-500 flex items-center justify-center text-white">
              outline-offset-2
            </div>
            <div className="w-24 h-24 outline-4 outline-red-500 outline-offset-4 bg-gray-500 flex items-center justify-center text-white">
              outline-offset-4
            </div>
            <div className="w-24 h-24 outline-4 outline-red-500 outline-offset-8 bg-gray-500 flex items-center justify-center text-white">
              outline-offset-8
            </div>
          </div>
        </div>
      </div>
    );
  }