import React from "react";
import "../pages/styles.css";
import Profilepage from "../pages/Profilepage";
function Navbar() {
return (
<div class="">
    <header class="bg-slate-800">
    <nav class="flex justify-between  mx-auto">
        <div>
        <p class="text-white mx-5 mt-3">BitNBuilt</p>
        </div>
        <div class="-translate-x-14">
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
            <a class="hover:text-gray-400 text-white" href="/profile"></a>
            </li>
        </ul>
        </div>
        <div>
        <div class="relative ml-3 -translate-x-5 translate-y-2">
            <button
            type="button"
            class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
            >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">Open user menu</span>
            <img class="h-8 w-8 rounded-full" src="#" alt="" />
            </button>
        </div>
        </div>
    </nav>
    </header>
</div>
);
}

export default Navbar;
