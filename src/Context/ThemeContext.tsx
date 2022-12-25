import React from 'react';
import logo from './logo.svg';

interface IThemeContext {
    theme: string;
    setTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<IThemeContext>({theme: "light", setTheme: (theme: string) => {}});

