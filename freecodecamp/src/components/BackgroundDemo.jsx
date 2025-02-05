export default function BackgroundDemo() {
    return (
      <div className="p-6 space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Tailwind CSS Background Properties</h2>
  
        {/* Background Color */}
        <div className="p-6 rounded-md bg-blue-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Background Color</h3>
          <div className="h-24 bg-blue-500 rounded-md flex items-center justify-center text-white">
            bg-blue-500
          </div>
        </div>
  
        {/* Background Image */}
        <div className="p-6 rounded-md bg-green-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Background Image</h3>
          <div
            className="h-48 bg-cover bg-center rounded-md flex items-center justify-center text-white"
            style={{ backgroundImage: "url('https://picsum.photos/id/15/200/300')" }}
          >
            bg-cover bg-center
          </div>
        </div>
  
        {/* Background Repeat */}
        <div className="p-6 rounded-md bg-yellow-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Background Repeat</h3>
          <div
            className="h-48 bg-repeat bg-center rounded-md flex items-center justify-center text-white"
            style={{ backgroundImage: "url('https://picsum.photos/id/22/200/300')" }}
          >
            bg-repeat
          </div>
        </div>
  
        {/* Background Size */}
        <div className="p-6 rounded-md bg-purple-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Background Size</h3>
          <div
            className="h-48 bg-contain bg-no-repeat bg-center rounded-md flex items-center justify-center text-white"
            style={{ backgroundImage: "url('https://picsum.photos/id/22/200/300')" }}
          >
            bg-contain
          </div>
        </div>
  
        {/* Background Position */}
        <div className="p-6 rounded-md bg-red-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Background Position</h3>
          <div
            className="h-48 bg-cover bg-no-repeat bg-left-top rounded-md flex items-center justify-center text-white"
            style={{ backgroundImage: "url('https://picsum.photos/id/22/200/300')" }}
          >
            bg-left-top
          </div>
        </div>
  
        {/* Background Clip */}
        <div className="p-6 rounded-md bg-indigo-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Background Clip</h3>
          <div className="p-4 bg-clip-content bg-blue-500 border-4 border-dashed border-blue-300">
            <p className="text-white">bg-clip-content</p>
          </div>
        </div>
  
        {/* Background Origin */}
        <div className="p-6 rounded-md bg-pink-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Background Origin</h3>
          <div className="p-4 bg-origin-border bg-blue-500 border-4 border-dashed border-blue-300">
            <p className="text-white">bg-origin-border</p>
          </div>
        </div>
  
        {/* Background Attachment */}
        <div className="p-6 rounded-md bg-gray-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Background Attachment</h3>
          <div
            className="h-48 bg-fixed bg-cover bg-center rounded-md flex items-center justify-center text-white"
            style={{ backgroundImage: "url('https://picsum.photos/id/15/200/300')" }}
          >
            bg-fixed
          </div>
        </div>
      </div>
    );
  }