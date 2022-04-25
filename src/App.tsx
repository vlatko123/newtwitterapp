import React, {useContext} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {RoutesComponent} from './state/RoutesComponent';
import {ThemeContext} from './context/Contexts';
import {theme} from './theme/theme';
import './App.css';

function App() {
  const {localTheme} = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme[localTheme]}>
      <Styled.Container className="container-fluid">
        <div className="row">
          <div className="container">
            {/*whole app goes down here */}
            <RoutesComponent />
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
