"use client";
import { useState } from "react";

export default function CoreConceptsDemo() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="p-6 max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Tailwind CSS Core Concepts
        </h1>

        {/* Utility Classes Example */}
        <section className="mt-6 p-4 border rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Utility Classes</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Tailwind uses utility-first CSS for rapid styling.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600">
            Click Me
          </button>
        </section>

        {/* Hover, Focus, and States */}
        <section className="mt-6 p-4 border rounded-md shadow-md">
          <h2 className="text-xl font-semibold">State Variants</h2>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md 
            hover:bg-green-600 focus:ring-4 focus:ring-green-300 active:bg-green-700">
            Interactive Button
          </button>
        </section>

        {/* Responsive Design */}
        <section className="mt-6 p-4 border rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Responsive Design</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Resize the screen to see text size change.
          </p>
        </section>

        {/* Dark Mode */}
        <section className="mt-6 p-4 border rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Dark Mode</h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white px-4 py-2 rounded-md mt-2 hover:bg-gray-900"
          >
            Toggle Dark Mode
          </button>
        </section>

        {/* Theme Variables */}
        <section className="mt-6 p-4 border rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Theme Variables</h2>
          <div className="text-primary">This text uses theme primary color.</div>
        </section>

        {/* Colors */}
        <section className="mt-6 p-4 border rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Colors</h2>
          <div className="flex space-x-4">
            <div className="w-12 h-12 bg-red-500"></div>
            <div className="w-12 h-12 bg-blue-500"></div>
            <div className="w-12 h-12 bg-green-500"></div>
          </div>
        </section>

        {/* Custom Styles using @apply */}
        <section className="mt-6 p-4 border rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Custom Styles</h2>
          <p className="custom-text">This text has a custom Tailwind style.</p>
        </section>

        {/* Detecting Classes */}
        <section className="mt-6 p-4 border rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Detecting Classes</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Ensure Tailwind detects dynamic class names.
          </p>
        </section>

        {/* Functions & Directives */}
        <section className="mt-6 p-4 border rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Functions & Directives</h2>
          <p className="text-custom">Using @apply and @variants.</p>
        </section>
      </div>
    </div>
  );
}
