import Link from "next/link";
import React from "react";

function Sidebar() {
    const sideBarItems = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Profile",
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
    return (
        <div className="w-[250px] h-full overflow-auto bg-slate-50 dark:bg-[#282828] flex flex-col gap-2 items-center">
            <div className="border-b-2 border:bg-white dark:border-[#333] w-full flex flex-col justify-stretch items-start">
                {sideBarItems.map((item, index) => {
                    return (
                        <Link
                            href={item.link}
                            key={index}
                            className="hover:dark:bg-[#444] hover:bg-slate-100  cursor-pointer p-2 px-4 w-full"
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
