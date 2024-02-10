import React from "react";
import "../pages/styles.css";
function Navbar() {
return (
<div class="">
    <header class="bg-slate-800">
    <nav class="flex justify-start  mx-auto">
        <div>
        <img class="text-white" src="#" alt="BitNBuild" />
        </div>
        <div class="">
        <ul class="flex  gap-14 py-3">
            <li>
            <a class="hover:text-gray-400 text-white" href="/home">
                Home
            </a>
            </li>
            <li>
            <a class="hover:text-gray-400 text-white" href="/leaderboard">
                Leaderboard
            </a>
            </li>
            <li>
            <a class="hover:text-gray-400 text-white" href="/calendar">
                Calendar
            </a>
            </li>
            <li>
            <a class="hover:text-gray-400 text-white" href="/profile">
                Profile
            </a>
            </li>
        </ul>
        </div>
        {/* <div class="flex items-center gap-10 -translate-x-8 py-3 px-2 ">
    <button class="text-white border border-blue-300 rounded-xl px-4 hover:bg-black">Log in</button>
    <button class="text-white border border-blue-300 rounded-xl px-3 hover:bg-black">Sign up</button>
</div> */}
    </nav>
    </header>
</div>
);
}

export default Navbar;
