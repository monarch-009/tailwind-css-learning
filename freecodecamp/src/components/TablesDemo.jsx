// components/TablesDemo.jsx

export default function TablesDemo() {
    return (
        <div className="p-6 space-y-6 max-w-4xl mx-auto">

            {/* Heading */}
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Tailwind CSS Tables</h1>

            {/* Table with Border Collapse */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Border Collapse</h2>
                <table className="min-w-full table-auto border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Age</th>
                            <th className="border px-4 py-2">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">John Doe</td>
                            <td className="border px-4 py-2">30</td>
                            <td className="border px-4 py-2">New York</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Jane Smith</td>
                            <td className="border px-4 py-2">25</td>
                            <td className="border px-4 py-2">San Francisco</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Sam Green</td>
                            <td className="border px-4 py-2">35</td>
                            <td className="border px-4 py-2">Chicago</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Table with Border Spacing */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Border Spacing</h2>
                <table className="min-w-full table-auto border-spacing-4 border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Age</th>
                            <th className="border px-4 py-2">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">John Doe</td>
                            <td className="border px-4 py-2">30</td>
                            <td className="border px-4 py-2">New York</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Jane Smith</td>
                            <td className="border px-4 py-2">25</td>
                            <td className="border px-4 py-2">San Francisco</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Sam Green</td>
                            <td className="border px-4 py-2">35</td>
                            <td className="border px-4 py-2">Chicago</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Table with Table Layout */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Table Layout</h2>
                <table className="min-w-full table-fixed border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Age</th>
                            <th className="border px-4 py-2">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">John Doe</td>
                            <td className="border px-4 py-2">30</td>
                            <td className="border px-4 py-2">New York</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Jane Smith</td>
                            <td className="border px-4 py-2">25</td>
                            <td className="border px-4 py-2">San Francisco</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Sam Green</td>
                            <td className="border px-4 py-2">35</td>
                            <td className="border px-4 py-2">Chicago</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Table with Caption Side */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Caption Side</h2>
                <table className="min-w-full table-auto border-collapse border border-gray-400">
                    <caption className="text-xl font-semibold text-gray-800 mb-4">
                        Users Information
                    </caption>
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Age</th>
                            <th className="border px-4 py-2">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">John Doe</td>
                            <td className="border px-4 py-2">30</td>
                            <td className="border px-4 py-2">New York</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Jane Smith</td>
                            <td className="border px-4 py-2">25</td>
                            <td className="border px-4 py-2">San Francisco</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Sam Green</td>
                            <td className="border px-4 py-2">35</td>
                            <td className="border px-4 py-2">Chicago</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}
