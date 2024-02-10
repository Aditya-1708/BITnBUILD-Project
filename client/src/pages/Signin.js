//basic skeleton done ps add the styling and animation
import "./styles.css";
function Signin() {
return (
    <section class=" min-h-screen flex items-center justify-center">
    <div class=" bg-opacity-20 max-w-[950px] rounded-2xl shadow-2xl shadow-black py-5 px-0.25  gap-6">   

        <div class="px-16">
        <h2 class="pt-4 font-bold text-2xl"> Login</h2>
        <p class="text-sm  mt-1">
            If you are already a member , easily log in.
        </p>
        <form action class="flex flex-col gap-2">
            <input
            class=" placeholder-gray-500 font-semibold py-1 px-2 mt-10 rounded-xl border border-blue-300"
            type="text"
            name="email"
            placeholder="Enter Email"
            />
            <div class="relative">
            <input
            class="placeholder-gray-500 font-semibold w-full py-1 px-2 mt-2 rounded-xl border-blue-300"
            type="password"
            name="password"
            placeholder="Enter Password"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="grey" class="bi bi-eye absolute top-1 right-2 translate-y-3.5" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
            </svg>
            </div>
            <button class=" rounded-2xl text-white  bg-blue-500 hover:bg-blue-800 px-1 py-2 mt-2 ">
            Login
            </button>
        </form>
        <div class="text-center mt-3 text-grey w-full text">
            ------------------OR------------------
        </div>
        <div>
            <button class="text-sm w-full hover:text-indigo-700 border-2 border-blue-300  py-1 rounded-xl mt-2 flex justify-center items-center bg-white font-semibold">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Signin with Google</button>
        </div>
        <div class="flex justify-center items-center mt-3">
        <p class="text-sm">forgot your password?</p>
        <a class="text-sm text-indigo-700  hover:text-indigo-500" href="#">click here</a>
        </div>
        

        <p class="mt-4 text-center text-sm text-gray-500">
            Do not have an account? 
            <a
            href="#"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
            <button class="text-sm ">register now!</button>
            </a>
        </p>
        </div>
    </div>
    </section>
);
}
export default Signin;
