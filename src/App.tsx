import React, {useContext} from 'react';
import {RoutesComponent} from './state/RoutesComponent';
import './App.css';
import styled from 'styled-components';
import {ThemeContext} from '../src/context/Contexts';

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <Styled.Container theme={theme} className="container-fluid">
      <div className="row">
        <div className="container">
          {/*whole app goes down here */}
          <RoutesComponent />
        </div>
      </div>
    </Styled.Container>
  );
}

export default App;

const Styled = {
  Container: styled.div<{theme: 'dark' | 'light'}>`
    background: ${props => (props.theme === 'light' ? 'black' : 'white')};
  `,
};
