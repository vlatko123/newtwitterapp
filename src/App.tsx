import React, {useContext} from 'react';
import {RoutesComponent} from './state/RoutesComponent';
import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import {ThemeContext} from './context/Contexts';
import {theme} from './theme/theme';

function App() {
  const {localTheme} = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme[localTheme]}>
      <Styled.Container className="container-fluid">
        <div className="row">
          <div className="container">
            {/*whole app goes down here */}
            <div className="row">
              <Navbar />
              <RoutesComponent />
              <Search />
            </div>
          </div>
    <Styled.Container theme={theme} className="container-fluid">
      <div className="row">
        <div className="container">
          {/*whole app goes down here */}
          <RoutesComponent />
        </div>
      </Styled.Container>
    </ThemeProvider>
  );
}

export default App;

const Styled = {
  Container: styled.div`
    background: ${props => props.theme.background};
  `,
};
