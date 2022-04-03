import React, {useState} from 'react';

interface ContextValues {
  localTheme: 'dark' | 'light';
  theme: 'dark' | 'light';
  changeTheme: () => void;
}

export const ThemeContext = React.createContext<ContextValues>({
  localTheme: 'dark',
  theme: 'light',
  changeTheme: () => {},
});

export const ContextsConstructor = ({children}: {children: JSX.Element}) => {
  const [localTheme, setTheme] = useState<'dark' | 'light'>('dark');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const changeTheme = () => {
    setTheme(localTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider
      value={{localTheme: localTheme, changeTheme: changeTheme}}
    >
      {children}
    </ThemeContext.Provider>
  );
};
