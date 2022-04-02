import React, {useState} from 'react';

interface ContextValues {
  theme: 'dark' | 'light';
  changeTheme: () => void;
}

export const ThemeContext = React.createContext<ContextValues>({
  theme: 'light',
  changeTheme: () => {},
});

export const ContextsConstructor = ({children}: {children: JSX.Element}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
