import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/images/logo.svg";
import { UserRound } from 'lucide-react';

function page() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#F4F6FF] text-black font-dm">
            <div className="w-full py-4 px-4 bg-white bg-opacity-40 shadow-md flex items-center justify-between">
                <Link href={"/"}>
                    <Image src={logo} height={300} width={300} alt="logo" />
                </Link>
                <div className="flex space-x-7 p-5 items-center cursor-pointer text-2xl">
                    <Link href="/getstarted">Get Started</Link>
                    <Link href="/library">Library</Link>
                    <Link href="/getstarted">Upload Data Set</Link>
                    <Link href="/about">About us</Link>
                    <UserRound />
                </div>
            </div>
        </div>
    )
}

export default page
