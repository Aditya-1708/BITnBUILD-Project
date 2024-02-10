import React from 'react';

const StaticPage = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to My Static Page</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Placeholder for the image */}
                <div className="mb-4">
                    {/* Placeholder image with fixed height */}
                    <img src="https://via.placeholder.com/400x200" alt="Placeholder Image" className="w-full h-48 bg-gray-200 object-cover rounded-lg" />
                </div>
                <p>This is a read-only static page created using Tailwind CSS.</p>
                <p>Values fetched from the backend will appear here:</p>
                {/* Placeholder for fetched values */}
                <div className="mt-4 space-y-4">
                    <div className="flex justify-between">
                        <p className="w-1/3 bg-gray-200 h-8"></p> {/* Placeholder for value */}
                        <p className="w-1/3 bg-gray-200 h-8"></p> {/* Placeholder for value */}
                        <p className="w-1/3 bg-gray-200 h-8"></p> {/* Placeholder for value */}
                    </div>
                    <div className="flex justify-between">
                        <p className="w-1/2 bg-gray-200 h-8"></p> {/* Placeholder for value */}
                        <p className="w-1/2 bg-gray-200 h-8"></p> {/* Placeholder for value */}
                    </div>
                    {/* Add more placeholders as needed */}
                </div>
            </div>
        </div>
    );
}

export default StaticPage;
