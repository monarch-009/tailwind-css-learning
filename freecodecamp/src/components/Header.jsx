export default function Header() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo or Title */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-gray-800">Learning Tailwind CSS</h1>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="#backgrounds"
                            className="text-gray-600 hover:text-gray-900 font-medium transition duration-150 ease-in-out"
                        >
                            Backgrounds
                        </a>
                        <a
                            href="#borders"
                            className="text-gray-600 hover:text-gray-900 font-medium transition duration-150 ease-in-out"
                        >
                            Borders
                        </a>
                        <a
                            href="#transforms"
                            className="text-gray-600 hover:text-gray-900 font-medium transition duration-150 ease-in-out"
                        >
                            Transforms
                        </a>
                        <a
                            href="#flexbox"
                            className="text-gray-600 hover:text-gray-900 font-medium transition duration-150 ease-in-out"
                        >
                            Flexbox
                        </a>
                        <a
                            href="#grid"
                            className="text-gray-600 hover:text-gray-900 font-medium transition duration-150 ease-in-out"
                        >
                            Grid
                        </a>
                    </nav>

                    {/* Mobile Menu Button (Hidden on Desktop) */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Icon */}
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Hidden by Default) */}
            <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                        href="#backgrounds"
                        className="block text-gray-600 hover:text-gray-900 font-medium transition duration-150 ease-in-out"
                    >
                        Backgrounds
                    </a>
                    <a
                        href="#borders"
                        className="block text-gray-600 hover:text-gray-900 font-medium transition duration-150 ease-in-out"
                    >
                        Borders
                    </a>
                    <a
                        href="#transforms"
                        className="block text-gray-600 hover:text-gray-900 font-medium transition duration-150 ease-in-out"
                    >
                        Transforms
                    </a>
                    <a
                        href="#flexbox"
                        className="block text-gray-600 hover:text-gray-900 font-medium transition duration-150 ease-in-out"
                    >
                        Flexbox
                    </a>
                    <a
                        href="#grid"
                        className="block text-gray-600 hover:text-gray-900 font-medium transition duration-150 ease-in-out"
                    >
                        Grid
                    </a>
                </div>
            </div>
        </header>
        </div>
    );
}