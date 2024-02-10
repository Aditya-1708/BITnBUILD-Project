import React, { useState } from 'react';

function Email() {
    const [email, setEmail] = useState('');

    const handleSendEmail = async () => {
        try {
            const response = await fetch('/users/emailOTP', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                const data = await response.json();
                console.error('Email sending failed:', data.error);
            }
        } catch (error) {
            console.error('Email sending error:', error);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="border shadow-2xl max-w-[950px] shadow-black py-12 px-6 rounded-2xl bg-slate-4 900">
                <div className="px-16">
                    <h2 className="font-serif font-semibold text-3xl translate-x-6">BitNBuild</h2>
                    <h2 className="text-1xl mt-3 font-semibold -translate-x-14">Create your Account</h2>
                    <p className="text-sm font-medium -translate-x-14">signup and let's embrace the journey ahead together..</p>
                </div>
                <div>
                    <form className="flex flex-col">
                        <p className="font-semibold mt-4 py-2 mx-2">Enter Your Email</p>
                        <input
                            className="py-2 px-2 w-full rounded-xl placeholder-gray-500 placeholder-animate border border-blue-300 font-semibold"
                            type="text"
                            name="email"
                            placeholder="abcd@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </form>
                </div>
                <div className="flex justify-end">
                    <button
                        className="mt-4 w-full text-sm text-white px-6 py-2 border rounded-xl border-blue-300 bg-blue-500 hover:bg-blue-800"
                        onClick={handleSendEmail}
                    >
                        Signup
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Email;
