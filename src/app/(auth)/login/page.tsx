"use client";
import ThemeSwitcher from "@/components/themeSwitcher";
import React from "react";

function Page() {
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login");
    };
    return (
        <div className="flex shadow-xl shadow-black/80 flex-col justify-center items-center min-h-screen p-2">
            <form
                onSubmit={handleLogin}
                className="bg-white dark:bg-[#333] p-6 max-w-[400px] w-full rounded-lg dark:text-white flex flex-col justify-stretch items-center"
            >
                <h1 className="text-center text-3xl font-[800]">GOSSIPS</h1>
                <div className="h-2"></div>
                <div className="flex flex-col  w-full">
                    <label>Enter Your Name</label>
                    <input
                        required
                        spellCheck="false"
                        type="text"
                        className="p-2  outline-none bg-transparent  w-full border-none rounded-md"
                        placeholder="UserName"
                    />
                </div>
                <div className="flex flex-col  w-full">
                    <label>Enter Your Password</label>
                    <input
                        required
                        type="password"
                        className="p-2  outline-none w-full bg-transparent border-none rounded-md"
                        placeholder="Password"
                    />
                </div>
                <div className="h-2"></div>
                <button className="bg-violet-500 rounded-md text-white p-2 font-bold w-full">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Page;
