export default function GridDemo() {
    return (
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Tailwind CSS Grid</h2>
  
        {/* Grid Template Columns */}
        <div className="grid grid-cols-3 gap-4 bg-blue-100 p-4 rounded-md">
          <div className="bg-blue-500 text-white flex items-center justify-center p-4 rounded-md">1</div>
          <div className="bg-blue-600 text-white flex items-center justify-center p-4 rounded-md">2</div>
          <div className="bg-blue-700 text-white flex items-center justify-center p-4 rounded-md">3</div>
        </div>
  
        {/* Grid Column Span & Positioning */}
        <div className="grid grid-cols-4 gap-4 bg-green-100 p-4 rounded-md">
          <div className="bg-green-500 text-white flex items-center justify-center p-4 rounded-md col-span-2">Span 2</div>
          <div className="bg-green-600 text-white flex items-center justify-center p-4 rounded-md col-start-3 col-end-5">
            Starts at 3, Ends at 5
          </div>
        </div>
  
        {/* Grid Template Rows */}
        <div className="grid grid-rows-3 grid-cols-2 gap-4 bg-yellow-100 p-4 rounded-md">
          <div className="bg-yellow-500 text-white flex items-center justify-center p-4 rounded-md">Row 1</div>
          <div className="bg-yellow-600 text-white flex items-center justify-center p-4 rounded-md">Row 2</div>
          <div className="bg-yellow-700 text-white flex items-center justify-center p-4 rounded-md">Row 3</div>
        </div>
  
        {/* Grid Auto Flow */}
        <div className="grid grid-flow-col auto-cols-fr gap-4 bg-purple-100 p-4 rounded-md">
          <div className="bg-purple-500 text-white flex items-center justify-center p-4 rounded-md">Auto 1</div>
          <div className="bg-purple-600 text-white flex items-center justify-center p-4 rounded-md">Auto 2</div>
          <div className="bg-purple-700 text-white flex items-center justify-center p-4 rounded-md">Auto 3</div>
        </div>
  
        {/* Justify Content & Align Content */}
        <div className="grid grid-cols-3 gap-4 bg-red-100 p-4 rounded-md justify-center content-center h-32">
          <div className="bg-red-500 text-white flex items-center justify-center p-4 rounded-md">1</div>
          <div className="bg-red-600 text-white flex items-center justify-center p-4 rounded-md">2</div>
          <div className="bg-red-700 text-white flex items-center justify-center p-4 rounded-md">3</div>
        </div>
  
        {/* Justify Items & Align Items */}
        <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded-md justify-items-center items-center h-32">
          <div className="bg-gray-500 text-white flex items-center justify-center p-4 rounded-md">Item 1</div>
          <div className="bg-gray-600 text-white flex items-center justify-center p-4 rounded-md">Item 2</div>
          <div className="bg-gray-700 text-white flex items-center justify-center p-4 rounded-md">Item 3</div>
        </div>
  
        {/* Justify Self & Align Self */}
        <div className="grid grid-cols-3 gap-4 bg-indigo-100 p-4 rounded-md h-32">
          <div className="bg-indigo-500 text-white flex items-center justify-center p-4 rounded-md justify-self-start">Left</div>
          <div className="bg-indigo-600 text-white flex items-center justify-center p-4 rounded-md justify-self-center">Center</div>
          <div className="bg-indigo-700 text-white flex items-center justify-center p-4 rounded-md justify-self-end">Right</div>
        </div>
  
        {/* Place Content & Place Items */}
        <div className="grid grid-cols-3 gap-4 bg-teal-100 p-4 rounded-md h-32 place-content-center">
          <div className="bg-teal-500 text-white flex items-center justify-center p-4 rounded-md">A</div>
          <div className="bg-teal-600 text-white flex items-center justify-center p-4 rounded-md">B</div>
          <div className="bg-teal-700 text-white flex items-center justify-center p-4 rounded-md">C</div>
        </div>
  
        {/* Place Self */}
        <div className="grid grid-cols-3 gap-4 bg-pink-100 p-4 rounded-md h-32">
          <div className="bg-pink-500 text-white flex items-center justify-center p-4 rounded-md place-self-start">Top</div>
          <div className="bg-pink-600 text-white flex items-center justify-center p-4 rounded-md place-self-center">Center</div>
          <div className="bg-pink-700 text-white flex items-center justify-center p-4 rounded-md place-self-end">Bottom</div>
        </div>
      </div>
    );
  }
  