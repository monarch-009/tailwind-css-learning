// components/FiltersDemo.jsx

export default function FiltersDemo() {
    return (
      <div className="p-6 space-y-6 max-w-2xl mx-auto">
  
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Tailwind CSS Filters</h1>
  
        {/* Filter Effects with Same Background Color */}
        <div className="bg-blue-500 text-white p-6 rounded-lg filter blur-sm mb-6">
          Blur: Small
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg filter brightness-150 mb-6">
          Brightness: 150%
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg filter contrast-200 mb-6">
          Contrast: 200%
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg filter drop-shadow-lg mb-6">
          Drop Shadow: Large
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg filter grayscale mb-6">
          Grayscale: 100%
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg filter hue-rotate-90 mb-6">
          Hue Rotate: 90°
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg filter invert mb-6">
          Invert: 100%
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg filter saturate-200 mb-6">
          Saturate: 200%
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg filter sepia mb-6">
          Sepia: 100%
        </div>
  
        {/* Backdrop Filter Effects with Same Background Color */}
        <div className="bg-blue-500 text-white p-6 rounded-lg backdrop-blur-sm mb-6">
          Backdrop Blur: Small
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg backdrop-brightness-150 mb-6">
          Backdrop Brightness: 150%
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg backdrop-contrast-200 mb-6">
          Backdrop Contrast: 200%
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg backdrop-grayscale mb-6">
          Backdrop Grayscale: 100%
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg backdrop-hue-rotate-90 mb-6">
          Backdrop Hue Rotate: 90°
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg backdrop-invert mb-6">
          Backdrop Invert: 100%
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg backdrop-opacity-50 mb-6">
          Backdrop Opacity: 50%
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg backdrop-saturate-200 mb-6">
          Backdrop Saturate: 200%
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg backdrop-sepia mb-6">
          Backdrop Sepia: 100%
        </div>
  
      </div>
    );
  }
  