import React from 'react';

const Profilepage = () => {
    return (
        <div className="flex flex-row py-16 justify-center bg-gray-100">
            <div className="flex items-center">
                <div className="bg-white rounded-full overflow-hidden border-2 border-purple-400 shadow-md mx-8">
                    <img className="h-32 w-32 object-cover" src="#" alt="" />
                </div>
                <div className="text-gray-800">
                    <h1 className="text-2xl font-semibold">Aditya Mishra</h1>
                    <p className="text-sm">Software Developer</p>
                    <p className="text-sm">aditya@gmail.com</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md ml-8 p-6">
                <h2 className="text-lg font-semibold mb-4">Ranking</h2>
                <div className="border-t border-gray-300 py-2">
                    <p className="text-sm">1. User 1</p>
                    <p className="text-sm">2. User 2</p>
                    <p className="text-sm">3. User 3</p>
                </div>
                <p className="mt-4 text-sm text-gray-600">Some text goes here...</p>
            </div>
        </div>
    );
}

export default Profilepage;
