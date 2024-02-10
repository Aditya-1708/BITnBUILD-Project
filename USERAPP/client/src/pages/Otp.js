import React, { useState } from 'react';

function Otp() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const handleVerifyOtp = async () => {
        try {
            const response = await fetch('/users/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, OTP: otp }),
            });

            if (response.ok) {
                console.log('Email successfully verified');
            } else {
                const data = await response.json();
                console.error('Email verification failed:', data.message);
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="bg-opacity-20 max-w-[950px] rounded-2xl shadow-2xl shadow-black py-5 px-0.25 gap-6">
                <div className="px-16">
                    <h2 className="pt-4 font-bold text-2xl">Enter OTP</h2>
                    <p className="text-sm mt-1">Do not share this with anyone.</p>
                    <form className="flex flex-col gap-2">
                        <input
                            className="placeholder-gray-500 font-semibold py-1 px-2 mt-5 rounded-xl border border-blue-300"
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="placeholder-gray-500 font-semibold py-1 px-2 mt-2 rounded-xl border border-blue-300"
                            type="text"
                            name="otp"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <button
                            className="rounded-2xl text-white bg-blue-500 hover:bg-blue-800 px-1 py-2 mt-2"
                            onClick={handleVerifyOtp}
                        >
                            Verify OTP
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-500">
                        Didn't receive OTP?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            <button className="text-sm">Try Again!</button>
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Otp;
