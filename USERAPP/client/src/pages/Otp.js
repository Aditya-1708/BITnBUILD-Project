import React from 'react'

function Otp() {
return (
    <section class="min-h-screen flex items-center justify-center">
        <div class="bg-opacity-20 max-w-[950px] rounded-2xl shadow-2xl shadow-black py-5 px-0.25  gap-6">
            <div class="px-16">
            <h2 class="pt-4 font-bold text-2xl">Enter Otp</h2>
            <p class="text-sm  mt-1">
                Do not share this with anyone.
            </p>
            <form action class="flex flex-col gap-2">
            <input
            class=" placeholder-gray-500 font-semibold py-1 px-2 mt-5 rounded-xl border border-blue-300"
            type="text"
            name="email"
            placeholder="Enter Email"
            />
            <button class=" rounded-2xl text-white  bg-blue-500 hover:bg-blue-800 px-1 py-2 mt-2 ">
            Login
            </button>
            </form>
            <p class="mt-4 text-center text-sm text-gray-500"/>
            Didnt receive Otp? 
            <a
            href="#"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
            <button class="text-sm ">Try Again!</button>
            </a>
            </div>


            
        </div>
    </section>
)
}

export default Otp