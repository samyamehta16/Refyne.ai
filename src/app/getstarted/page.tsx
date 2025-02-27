"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDropzone } from 'react-dropzone';
import logo from "@/assets/images/logo.svg";
import upload from "@/assets/images/upload.svg";

function Page() {
    interface FileProps {
        path?: string;
        lastModified: number;
        lastModifiedDate?: Date;
        name: string;
        size: number;
        type: string;
        webkitRelativePath: string;
    }

    const onDrop = (acceptedFiles: FileProps[]) => {
        console.log(acceptedFiles);
        acceptedFiles.forEach(file => {
            const formData = new FormData();
            formData.append('file', file as unknown as Blob);

            fetch('/api/upload', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    console.log('File uploaded successfully:', data);
                })
                .catch(error => {
                    console.error('Error uploading file:', error);
                });
        });
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'text/csv': ['.csv'],
            'application/vnd.ms-excel': ['.xls'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
        }
    });

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
            <div {...getRootProps()} className='border-2 border-[#6371b8] border-dashed w-[900px] h-[390px] m-10 rounded-lg bg-[#FFFFF2] flex flex-col items-center justify-center'>
                <input {...getInputProps()} />
                <Image src={upload} height={120} width={120} alt="Upload" className='pt-12' />
                <h1 className='mt-12 text-black font-semibold text-2xl'>Drag & drop files or <span className='text-[#5BB5EA] font-semibold cursor-pointer'>Browse</span></h1>
                <span className='text-[#676767] mt-6 text-2xl'>Supported formats: CSV, XLS, XLSX</span>
            </div>
            <div className='flex flex-col items-center w-[900px] mb-12'>
                <span className='text-2xl font-semibold'>Which Model do you want to use?</span>
                <input type='text' className='border-2 border-black w-full h-[80px] my-6 rounded-lg bg-[#FFFFF2] p-5' />
                <span className='text-2xl font-semibold'>Enter Specific Keywords to Search</span>
                <input type='text' className='border-2 border-black w-full h-[150px] my-6 rounded-lg bg-[#FFFFF2] p-5' />
                <div className="flex w-full space-x-4 mt-6">
                    <button className="bg-[#5BB5EA] border border-solid border-black p-3 rounded-md w-1/2 text-lg font-semibold">Generate Data</button>
                    <button className="bg-[#5BB5EA] border border-solid border-black p-3 rounded-md w-1/2 text-lg font-semibold">Fetch Datasets</button>
                </div>
            </div>
            <div className="bg-white w-screen shadow-lg mt-24 flex items-center justify-between p-12">
                <div className="container mx-auto flex justify-between items-center">
                    <Image src={logo} height={400} width={400} alt="logo" />
                    <div className="flex space-x-20 text-2xl">
                        <div className="flex flex-col space-y-2 text-black">
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
}

export default Page;
