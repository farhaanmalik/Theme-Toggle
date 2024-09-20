/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}