import React, {useState} from 'react';

interface ContextValues {
    theme: "dark" | "light";
    changeTheme: () => void;
}

export const ThemeContext = React.createContext<ContextValues>({theme: "dark", changeTheme: () => {}});

export const ContextsConstructor = ({children}: {children: JSX.Element}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
