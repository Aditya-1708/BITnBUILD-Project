import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/styles.css";

function Navbar() {
    const history = useNavigate();

    const handleClick = () => {
        history("/profile");
    };

    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-700">
            <header className="container mx-auto flex items-center justify-between py-4">
                <h1 className="text-white text-2xl font-bold">BitNBuilt</h1>
                <nav>
                    <ul className="flex gap-8 text-white">
                        <li>
                            <a href="/home" className="hover:text-gray-200">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/leaderboard" className="hover:text-gray-200">
                                Leaderboard
                            </a>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="relative flex items-center focus:outline-none"
                                onClick={handleClick}
                            >
                                <span className="sr-only">View Profile</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="#" // Add the path to the user's profile image
                                    alt="User Profile"
                                />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
