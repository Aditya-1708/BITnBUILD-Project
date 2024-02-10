import React from 'react'
import "../pages/styles.css";
function Navbar() {
return (
<div class="">
<header class="bg-slate-800">
<nav class="flex justify-between  mx-auto">
    <div>
        <img class="text-white" src="#" alt="BitNBuild"/>
    </div>
    <div class="flex items-center gap-10 -translate-x-8 py-3 px-2 ">
        <button class="text-white border border-blue-300 rounded-xl px-4 hover:bg-black">Log in</button>
        <button class="text-white border border-blue-300 rounded-xl px-3 hover:bg-black">Sign up</button>
    </div>


                

</nav>

</header>
</div>
)
}

export default Navbar