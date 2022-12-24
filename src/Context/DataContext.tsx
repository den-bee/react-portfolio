import React from 'react';
import { readBuilderProgram } from 'typescript';
import logo from './logo.svg';

interface IThemeContext {
    theme: string;
    setTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<IThemeContext>({theme: "dark", setTheme: (theme: string) => {}});

