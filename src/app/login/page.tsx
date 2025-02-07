"use client";
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import logo from "@/assets/images/logo.svg";
import { Eye, EyeOff } from "lucide-react";

const login = () => {
    const [showpassword, setshowpassword] = useState(false);
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#F4F6FF] font-outfit text-black">
            <div className="w-full py-4 px-4 bg-white shadow-md flex items-center">
                <Image
                    src={logo}
                    height={200}
                    width={200}
                    alt='logo'
                ></Image>
            </div>
            <div className='shadow-xl rounded-lg text-center bg-white w-[50%] xl:w-[30%] m-8 h-[78vh] p-4 '>
                <div className="flex justify-center items-center">
                    <Image
                        src={logo}
                        height={200}
                        width={200}
                        alt="logo"
                    />
                </div>
                <p className="text-center text-black mt-8">Your AI Data Cleaner</p>
                <p className="text-center text-gray-500 mt-2 text-sm">Login to your account</p>
                <form className="mt-10">
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Your Full Name"
                            className="w-[90%] p-3 border rounded-lg bg-slate-100 focus:bg-slate-100 focus:outline-none" />
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="w-[90%] p-3 border rounded-lg bg-slate-100 focus:bg-slate-100 focus:outline-none"
                        />
                    </div>
                    <div className="mb-6 relative">
                        <input
                            type={showpassword ? "text" : "password"}
                            placeholder="Create a Strong Password"
                            className="w-[90%] p-3 border rounded-lg bg-slate-100 focus:bg-slate-100 focus:outline-none"
                        />
                        <span
                            className="absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer text-black"
                            onClick={() => setshowpassword(!showpassword)}
                        >
                            {showpassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </span>
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-10">
                        Don't have an account? <span className="text-[#5bb5ea] cursor-pointer">SignUp</span>
                    </p>
                    <button
                        type="submit"
                        className="w-[40%] bg-[#5BB5EA] mt-12 text-white p-3 rounded-lg hover:bg-[#56aadb]">
                        Login
                    </button>
                </form>
            </div>
        </div >
    )
};
export default login
