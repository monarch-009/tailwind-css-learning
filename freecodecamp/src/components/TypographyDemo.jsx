// components/TypographyDemo.jsx

export default function TypographyDemo() {
  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      
      {/* Heading Styles */}
      <h1 className="text-4xl font-extrabold text-gray-800">
        Tailwind Typography
      </h1>
      <h2 className="text-3xl font-bold text-gray-700">
        Heading 2 Example
      </h2>
      <h3 className="text-2xl font-semibold text-gray-600">
        Heading 3 Example
      </h3>
      
      {/* Paragraph Styles */}
      <p className="text-base text-gray-700 leading-relaxed">
        This is a sample paragraph demonstrating how text appears with Tailwind CSS. You can adjust 
        the <span className="font-bold">font weight</span>, <span className="italic">italicize</span>, or even 
        <span className="underline">underline</span> text using utility classes.
      </p>

      {/* Font Family */}
      <p className="font-serif text-gray-600">This text uses a serif font-family.</p>
      <p className="font-sans text-gray-600">This text uses a sans-serif font-family.</p>
      <p className="font-mono text-gray-600">This text uses a monospace font-family.</p>

      {/* Text Alignment */}
      <p className="text-left text-gray-600">This text is left-aligned.</p>
      <p className="text-center text-gray-600">This text is center-aligned.</p>
      <p className="text-right text-gray-600">This text is right-aligned.</p>

      {/* Letter Spacing & Line Height */}
      <p className="tracking-widest text-gray-800">
        This text has extra wide letter spacing.
      </p>
      <p className="tracking-tight text-gray-800">
        This text has tight letter spacing.
      </p>
      <p className="leading-loose text-gray-800">
        This paragraph has increased line height to improve readability.
      </p>
      <p className="leading-tight text-gray-800">
        This paragraph has tight line height.
      </p>

      {/* Font Weight */}
      <p className="font-normal text-gray-800">This text has normal font weight.</p>
      <p className="font-light text-gray-800">This text has light font weight.</p>
      <p className="font-bold text-gray-800">This text has bold font weight.</p>

      {/* Font Style */}
      <p className="italic text-gray-800">This text is italicized.</p>
      <p className="not-italic text-gray-800">This text is not italicized.</p>

      {/* Font Stretch */}
      <p className="font-extrabold text-gray-800">
        This text has an extra-bold font weight (Font Stretch not directly available in Tailwind).
      </p>

      {/* Text Decoration */}
      <p className="text-decoration-line underline text-decoration-color-red-500 text-decoration-style-dotted text-decoration-thickness-2 text-underline-offset-2">
        This text has a red dotted underline with a thickness of 2px and an offset of 2px.
      </p>

      {/* Text Transform */}
      <p className="text-transform uppercase text-gray-800">This text is uppercase.</p>
      <p className="text-transform lowercase text-gray-800">This text is lowercase.</p>
      <p className="text-transform capitalize text-gray-800">This text is capitalized.</p>

      {/* White Space & Word Break */}
      <p className="whitespace-nowrap text-gray-800">
        This text will not wrap and will stay on a single line.
      </p>
      <p className="whitespace-pre text-gray-800">
        This text will preserve white spaces and line breaks.
      </p>
      <p className="whitespace-pre-line text-gray-800">
        This text will preserve line breaks but wrap text normally.
      </p>
      <p className="word-break-break-word text-gray-800">
        This text will break if it’s too long and overflow the container.
      </p>

      {/* Text Overflow */}
      <p className="truncate w-48 text-gray-800">
        This is a very long text that will be truncated with ellipsis if it exceeds the width.
      </p>

      {/* Line Clamp (for multi-line truncation) */}
      <p className="line-clamp-2 text-gray-800">
        This is a very long paragraph that will be truncated after two lines using the line-clamp utility. 
        If the text is too long, it will cut off after two lines and show ellipsis.
      </p>

      {/* List Styling */}
      <ul className="list-disc pl-6 text-gray-700">
        <li>Unordered list item</li>
        <li>Another unordered item</li>
        <li>Yet another unordered item</li>
      </ul>

      <ol className="list-decimal pl-6 text-gray-700">
        <li>Ordered list item</li>
        <li>Another ordered item</li>
        <li>Yet another ordered item</li>
      </ol>
    </div>
  );
}
