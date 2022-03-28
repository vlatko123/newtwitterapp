import React, {useContext} from 'react';
import {Navbar} from '../src/containers/navbar/Navbar';
import {Search} from '../src/containers/search/Search';
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
