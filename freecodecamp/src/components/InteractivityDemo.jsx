export default function InteractivityDemo() {
  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Tailwind CSS Interactivity</h2>

      <section className="bg-blue-100 p-4 rounded-md">
        <h3 className="text-xl font-semibold">Accent Color</h3>
        <input type="checkbox" className="accent-blue-500" />
        <input type="checkbox" className="accent-red-500 ml-4" />
      </section>

      <section className="bg-green-100 p-4 rounded-md">
        <h3 className="text-xl font-semibold">Appearance</h3>
        <select className="appearance-none bg-white border p-2">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </section>

      <section className="bg-yellow-100 p-4 rounded-md">
        <h3 className="text-xl font-semibold">Caret Color</h3>
        <input type="text" placeholder="Type here..." className="caret-red-500 p-2 border" />
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Color Scheme</h3>
        <p className="text-gray-700 dark:text-gray-300">This adapts to dark mode automatically.</p>
      </section>

      <section className="bg-purple-100 p-4 rounded-md">
        <h3 className="text-xl font-semibold">Cursor</h3>
        <button className="cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-md">Hover over me</button>
        <button className="cursor-wait bg-purple-700 text-white px-4 py-2 ml-4 rounded-md">Wait cursor</button>
      </section>

      <section className="bg-red-100 p-4 rounded-md">
        <h3 className="text-xl font-semibold">Resize</h3>
        <textarea className="resize-y border p-2 w-full" placeholder="Try resizing me vertically"></textarea>
      </section>

      <section className="bg-indigo-100 p-4 rounded-md overflow-auto h-32">
        <h3 className="text-xl font-semibold">Smooth Scrolling</h3>
        <p className="scroll-smooth">This container has smooth scrolling enabled.</p>
      </section>

      <section className="bg-pink-100 p-4 rounded-md">
        <h3 className="text-xl font-semibold">Scroll Margin & Padding</h3>
        <div className="scroll-mt-10 scroll-pt-5 bg-pink-300 p-2">Scroll adjustments applied</div>
      </section>

      <section className="bg-gray-100 p-4 rounded-md overflow-x-auto flex space-x-4 snap-x">
        <h3 className="text-xl font-semibold">Scroll Snap</h3>
        <div className="snap-start bg-blue-500 w-20 h-20"></div>
        <div className="snap-center bg-green-500 w-20 h-20"></div>
        <div className="snap-end bg-red-500 w-20 h-20"></div>
      </section>

      <section className="bg-lime-100 p-4 rounded-md">
        <h3 className="text-xl font-semibold">Touch Action</h3>
        <div className="touch-none bg-lime-500 p-2">Try interacting with this</div>
      </section>

      <section className="bg-rose-100 p-4 rounded-md">
        <h3 className="text-xl font-semibold">User Select</h3>
        <p className="select-none">This text cannot be selected.</p>
        <p className="select-text">This text can be selected.</p>
      </section>
    </div>
  );
}
