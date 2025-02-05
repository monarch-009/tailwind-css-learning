export default function FlexboxDemo() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Tailwind CSS Flexbox</h2>

      {/* Basic Flex Row */}
      <div className="flex bg-blue-100 p-4 rounded-md">
        <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-md">1</div>
        <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-md">2</div>
        <div className="w-16 h-16 bg-blue-700 text-white flex items-center justify-center rounded-md">3</div>
      </div>

      {/* Flex Column */}
      <div className="flex flex-col bg-green-100 p-4 rounded-md">
        <div className="w-full h-12 bg-green-500 text-white flex items-center justify-center rounded-md">Row 1</div>
        <div className="w-full h-12 bg-green-600 text-white flex items-center justify-center rounded-md">Row 2</div>
        <div className="w-full h-12 bg-green-700 text-white flex items-center justify-center rounded-md">Row 3</div>
      </div>

      {/* Justify Content Examples */}
      <div className="flex justify-between bg-yellow-100 p-4 rounded-md">
        <div className="w-16 h-16 bg-yellow-500 text-white flex items-center justify-center rounded-md">A</div>
        <div className="w-16 h-16 bg-yellow-600 text-white flex items-center justify-center rounded-md">B</div>
        <div className="w-16 h-16 bg-yellow-700 text-white flex items-center justify-center rounded-md">C</div>
      </div>

      {/* Align Items Example */}
      <div className="flex items-center bg-purple-100 p-4 rounded-md h-32">
        <div className="w-16 h-16 bg-purple-500 text-white flex items-center justify-center rounded-md">X</div>
        <div className="w-16 h-16 bg-purple-600 text-white flex items-center justify-center rounded-md">Y</div>
        <div className="w-16 h-16 bg-purple-700 text-white flex items-center justify-center rounded-md">Z</div>
      </div>

      {/* Flex Wrap Example */}
      <div className="flex flex-wrap gap-4 bg-red-100 p-4 rounded-md">
        <div className="w-24 h-16 bg-red-500 text-white flex items-center justify-center rounded-md">1</div>
        <div className="w-24 h-16 bg-red-600 text-white flex items-center justify-center rounded-md">2</div>
        <div className="w-24 h-16 bg-red-700 text-white flex items-center justify-center rounded-md">3</div>
        <div className="w-24 h-16 bg-red-800 text-white flex items-center justify-center rounded-md">4</div>
        <div className="w-24 h-16 bg-red-900 text-white flex items-center justify-center rounded-md">5</div>
      </div>

      {/* Flex Grow Example */}
      <div className="flex bg-gray-100 p-4 rounded-md space-x-2">
        <div className="flex-1 bg-gray-500 text-white flex items-center justify-center p-4 rounded-md">Grow 1</div>
        <div className="flex-2 bg-gray-600 text-white flex items-center justify-center p-4 rounded-md">Grow 2</div>
      </div>

      {/* Responsive Flex Direction */}
      <div className="flex flex-col md:flex-row bg-indigo-100 p-4 rounded-md">
        <div className="w-32 h-16 bg-indigo-500 text-white flex items-center justify-center rounded-md">Item 1</div>
        <div className="w-32 h-16 bg-indigo-600 text-white flex items-center justify-center rounded-md">Item 2</div>
        <div className="w-32 h-16 bg-indigo-700 text-white flex items-center justify-center rounded-md">Item 3</div>
      </div>
    </div>
  );
}
