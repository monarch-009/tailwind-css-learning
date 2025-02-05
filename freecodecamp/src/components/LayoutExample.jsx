// components/LayoutExample.jsx

import React from 'react';

const LayoutExample = () => {
  return (
    <div className="flex flex-col items-center p-6 space-y-8">
      {/* Heading: Component for Layout Demonstration */}
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
        Tailwind CSS Layout Component
      </h2>
      
      {/* Container with padding, background, and rounded corners */}
      <div className="relative w-full max-w-5xl bg-gray-100 p-8 rounded-lg shadow-lg overflow-hidden">
        
        {/* Floating Circle with Z-index */}
        {/* A floating circle positioned in the top-right corner with z-index to layer it above other elements */}
        <div className="absolute top-4 right-4 w-24 h-24 bg-blue-500 rounded-full z-20"></div>

        {/* Aspect Ratio Box */}
        {/* Maintains a 16:9 aspect ratio for the container that holds the image */}
        <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-8">
          <img
            src="https://via.placeholder.com/640x360"
            alt="Example Aspect Ratio"
            className="object-cover w-full h-full" // Ensures the image covers the full container while maintaining its aspect ratio
          />
        </div>

        {/* Multi-column Layout */}
        {/* Creates two columns of equal width for the text content */}
        <div className="columns-2 gap-4 mb-6">
          <div className="bg-yellow-300 p-4 rounded-lg shadow-md">
            <p>
              Column 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-green-300 p-4 rounded-lg shadow-md">
            <p>
              Column 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Clearfix and Floating Elements */}
        {/* Floats two boxes next to each other, followed by a clearfix to ensure layout is not disturbed */}
        <div className="clearfix mb-6">
          <div className="float-left w-1/3 bg-indigo-300 p-4 rounded-lg mr-4">
            Left float example: This box is floated to the left of the container.
          </div>
          <div className="float-left w-1/3 bg-teal-300 p-4 rounded-lg">
            Another left float example: This box is also floated to the left.
          </div>
        </div>

        {/* Overflow Scrolling Box */}
        {/* Box that allows scrolling when content exceeds the size of the container */}
        <div className="overflow-auto w-full bg-gray-300 p-4 rounded-lg mt-8">
          <div className="h-48 bg-blue-400 overflow-auto">
            <p className="space-y-2">
              Scrollable content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae libero felis. Aenean malesuada.
            </p>
            <p className="space-y-2">
              More scrollable content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae libero felis. Aenean malesuada.
            </p>
          </div>
        </div>

        {/* Visibility Hidden Content */}
        {/* This box is hidden from view but still takes up space in the layout */}
        <div className="bg-red-200 p-4 rounded-lg mt-6 visibility-hidden">
          <p>This content is hidden but still occupies space in the layout.</p>
        </div>

        {/* Z-index Stacked Elements */}
        {/* Two circles stacked on top of each other with different z-index values */}
        <div className="relative mt-8 z-0">
          <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-500 z-20"></div>
          <div className="absolute top-6 left-6 w-24 h-24 bg-green-500 z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default LayoutExample;
