import React, {useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../../../../context/Contexts';

export const Display = () => {
  const {theme, changeTheme} = useContext(ThemeContext);
  return (
    <Styled.Container theme={theme}>
      <h4 onClick={changeTheme}>Switch Theme</h4>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div<{theme: 'dark' | 'light'}>`
    text-align: center;
    color: ${props => (props.theme === 'light' ? 'white' : 'black')};
    padding: 10px 5px;
    border-bottom: 1px solid rgb(32, 35, 39);
  `,
};
