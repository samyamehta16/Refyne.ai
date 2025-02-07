"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assets/images/logo.svg";
import { UserRound } from "lucide-react";

const Landing = () => {
    interface Step {
        title: string;
        description: string;
    }

    const steps: Step[] = [
        { title: "Smart data gathering", description: "The system fetches datasets from multiple sources based on user needs, ensuring relevant data collection. It then uses NLP-based matching to identify and merge similar columns, creating a unified dataset." },
        { title: "Auto clean and fill", description: "Missing values are detected and filled using advanced imputers to maintain data integrity. Additionally, the system fixes inconsistent formats and removes outliers, ensuring a clean and structured dataset for further processing." },
        { title: "Feauture magic", description: "Deep Feature Synthesis (DFS) automatically generates meaningful new features to enhance the dataset. The final, optimized data is then exported as a CSV, ready for seamless integration into machine learning workflows." },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen w-full bg-[#F4F6FF] text-black font-dm overflow-x-hidden">
            <div className="w-full py-4 px-4 bg-white bg-opacity-40 shadow-md flex items-center justify-between">
                <Link href={"/"}>
                    <Image src={logo} height={300} width={300} alt="logo" className='p-5' />
                </Link>
                <div className="flex space-x-7 p-5 items-center cursor-pointer text-2xl">
                    <Link href="/getstarted">Get Started</Link>
                    <Link href="/library">Library</Link>
                    <Link href="/upload">Upload Data Set</Link>
                    <button className="bg-[#5BB5EA] p-4 text-[20px] rounded-md text-lg hover:bg-[#53a6d5]">Logout</button>
                </div>
            </div>
            <div className="hero flex flex-col items-center bg-[url('/assets/images/lbg.svg')] bg-center bg-cover bg-no-repeat min-h-[80vh] w-full relative pb-20">
                <div className="absolute inset-2 bg-gradient-to-b from-transparent to-[#F4F6FF] h-full"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                    <Image src={logo} height={900} width={900} alt="logo" className="mt-24" />
                    <h1 className="mb-5 text-5xl mt-12 pt-12">Clean your Data Sets and generate</h1>
                    <h1 className="mb-10 text-5xl mt-1">Features with a single prompt</h1>
                    <Link href={"/getstarted"}>
                        <button className="bg-[#5BB5EA] mt-12 p-4 text-[20px] rounded-md text-lg hover:bg-[#53a6d5]">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
            <div className="text-center text-5xl">
                <h1 className="mb-5 mt-12 p-3">Data Preprocessing like never before!</h1>
                <p className="m-12 text-3xl max-w-4xl mx-auto">
                    It automates data cleaning, preprocessing, and feature engineering using Deep Feature Synthesis—all from simple prompts. No more manual wrangling, just ready-to-use data for powerful ML models.
                </p>
            </div>
            <div className="bg-white w-[80%] rounded-xl shadow-lg m-12 z-10 flex flex-col p-12">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="group bg-[#F4F6FF] rounded-xl p-5 mb-4 cursor-pointer transition-all duration-300 text-center w-1/2 h-[60px] hover:h-[200px] hover:bg-[#5BB5EA] hover:bg-opacity-50">
                        <div className="text-xl font-semibold">{step.title}</div>
                        <div className="text-gray-800 text-lg mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {step.description}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white w-screen shadow-lg mt-24 flex items-center justify-between p-10">
                <div className="container mx-auto flex justify-between items-center">
                    <Image src={logo} height={400} width={400} alt="logo" />
                    <div className="flex space-x-20 text-2xl">
                        <div className="flex flex-col space-y-3 text-black">
                            <Link href="/signup">Sign Up</Link>
                            <span className="cursor-pointer">Reports</span>
                            <span className="cursor-pointer">Help</span>
                            <span className="cursor-pointer">Status</span>
                        </div>
                        <div className="flex flex-col space-y-2 text-black">
                            <span className="cursor-pointer">About us</span>
                            <span className="cursor-pointer">Contact us</span>
                            <span className="cursor-pointer">Privacy Policy</span>
                            <span className="cursor-pointer">Legal Notices</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Landing;
