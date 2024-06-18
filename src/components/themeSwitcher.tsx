"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/helpers/themeProvider";

const ThemeSwitcher: React.FC = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error("ThemeSwitcher must be used within a ThemeProvider");
    }

    const { theme, setTheme } = themeContext;

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div
            onClick={toggleTheme}
            className="flex items-center justify-between pr-4 p-[10px] pl-8 w-full hover:bg-slate-50 hover:dark:bg-[#444] cursor-pointer"
        >
            Change Theme &nbsp;{" "}
            <div className="flex items-center gap-2 justify-center w-min">
                <div className="w-[50px] h-[25px]  overflow-hidden bg-slate-100 dark:bg-[#555] relative rounded-full cursor-pointer">
                    <div
                        style={{
                            transform:
                                theme === "dark" ? "translateX(100%)" : "",
                        }}
                        className="w-[25px] shadow-xl transition-all duration-300 shadow-black/60 h-[25px] rounded-full bg-slate-100 dark:bg-[#999] left-0 top-0 z-10  absolute"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
