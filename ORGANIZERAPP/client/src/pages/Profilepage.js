import React from 'react';

const Profilepage = () => {
    return (
        <div className="flex flex-row py-32 justify-center bg-gray-100 ">
            <div className="flex items-center ">
                <div className=" shadow-black rounded-full overflow-hidden border-8 border-white shadow-lg mx-10  ">
                    <img className="h-40 w-40 object-cover" src="#" alt="" />
                </div>
                <div className="mt-4  text-center py-8 px-10 flex flex-col">
                    <h1 className="text-3xl font-semibold">Aditya mishra</h1>
                    <br/>
                    <p className="text-gray-600">Software Developer</p>
                    <p className="text-gray-600">aditya@gmail.com</p>
                </div>
            </div>
            {/* <div className="bg-white px-20 py-20 rounded-2xl shadow-xl shadow-black ml-8 p-6 align-top">
                <h2 className="text-2xl font-bold mb-4">Ranking</h2>
                <div className="border-t-2 border-gray-500 py-2">
                    <p class="text-lg">1. User 1</p>
                    <p class="text-lg">2. User 2</p>
                    <p class="text-lg">3. User 3</p>
                </div>
                <p className="mt-4">Some text goes here...</p>
            </div> */}
        </div>
    );
}

export default Profilepage;