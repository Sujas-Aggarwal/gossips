"use client";
import React, {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";

interface ThemeContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

// Define the context outside of the component with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const initialTheme = "dark";
    const [theme, setTheme] = useState<string>(initialTheme || "dark");
    React.useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            // localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            // localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
export { ThemeContext };
