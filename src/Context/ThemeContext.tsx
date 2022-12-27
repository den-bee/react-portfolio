import React from 'react';
import logo from './logo.svg';

interface IThemeContext {
    theme: string;
    setTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<IThemeContext>({theme: "light", setTheme: (theme: string) => {}});

export const themeSwitch = (theme: string) => {
    return {
        backgroundColor: theme === "light" ? "rgb(229, 229, 203)" : "rgb(26, 18, 11)",
        color: theme === "light" ? "black" : "white"
    }
}
