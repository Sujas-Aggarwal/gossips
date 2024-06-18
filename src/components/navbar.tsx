"use client";
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./themeSwitcher";

function Navbar() {
    type navBarItemsType = {
        title: string;
        link: string;
    };
    const navBarItems: Array<navBarItemsType> = [
        {
            title: "View Profile",
            link: "/profile",
        },
        {
            title: "Settings",
            link: "/settings",
        },
        {
            title: "Log Out",
            link: "/logout",
        },
    ];
    const [isProfileBoxOpen, setIsProfileBoxOpen] =
        React.useState<boolean>(false);
    return (
        <nav className="w-full absolute left-0 top-0  h-[55px] z-[2000] dark:text-white flex items-center dark:bg-[#333] bg-white px-4 justify-between">
            <h1 className="text-xl font-bold">Gossips</h1>
            <div className="flex dark:bg-[#444] bg-slate-200 rounded-full w-[600px] items-center px-4">
                <svg
                    aria-hidden="true"
                    fill="currentColor"
                    height="16"
                    icon-name="search-outline"
                    viewBox="0 0 20 20"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z"></path>
                </svg>
                <input
                    spellCheck="false"
                    type="text"
                    placeholder="Search Gossip"
                    className="p-2  rounded-md bg-transparent w-full outline-none"
                />
            </div>
            <div className="flex gap-2 items-center">
                <Link
                    href={"/create"}
                    className="flex gap-3 items-center hover:dark:bg-[#444] hover:bg-slate-200 rounded-full p-2 px-4 cursor-pointer"
                >
                    <svg
                        fill="currentColor"
                        height="20"
                        icon-name="add-outline"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M19 9.375h-8.375V1h-1.25v8.375H1v1.25h8.375V19h1.25v-8.375H19v-1.25Z"></path>
                    </svg>
                    Create
                </Link>
                <div className="">
                    <img
                        onClick={() => setIsProfileBoxOpen((prev) => !prev)}
                        src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"
                        alt=""
                        className="w-[35px]  h-[35px] rounded-full cursor-pointer"
                    />
                    <div
                        style={{
                            display: isProfileBoxOpen ? "flex" : "none",
                        }}
                        className="w-[270px] text-black dark:text-white overflow-hidden rounded-md flex flex-col items-center py-2  top-[60px] bg-white dark:bg-[#333] absolute right-6"
                    >
                        <img
                            onClick={() => setIsProfileBoxOpen((prev) => !prev)}
                            src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"
                            alt=""
                            className="w-[35px] mb-1  h-[35px] rounded-full cursor-pointer"
                        />
                        <p className="text-sm">u/Username</p>
                        <div className="h-2"></div>
                        {navBarItems.map((item, index) => {
                            return (
                                <Link
                                    onClick={() => setIsProfileBoxOpen(false)}
                                    href={item.link}
                                    key={index}
                                    className=" p-[10px] pl-8 w-full hover:bg-slate-50 hover:dark:bg-[#444] cursor-pointer"
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
