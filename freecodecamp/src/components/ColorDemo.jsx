export default function ColorDemo() {
  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800">Tailwind CSS Colors</h2>

      {/* Text Colors */}
      <p className="text-red-500">This is red text.</p>
      <p className="text-blue-600">This is blue text.</p>
      <p className="text-green-700">This is green text.</p>

      {/* Background Colors */}
      <div className="bg-yellow-200 p-4 rounded-md">Yellow background</div>
      <div className="bg-purple-300 p-4 rounded-md">Purple background</div>
      <div className="bg-gray-500 text-white p-4 rounded-md">Gray background</div>

      {/* Hover Effect */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Hover Me
      </button>

      {/* Dark Mode Support */}
      <p className="text-gray-900 dark:text-gray-100">
        This text changes in dark mode.
      </p>
    </div>
  );
}
