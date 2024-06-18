import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen">
            <Navbar />
            <div className="h-[55px]"></div>
            <div className="w-full flex relative justify-start h-[calc(100vh-55px)] overflow-auto overflow-x-hidden">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}
