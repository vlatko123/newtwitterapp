import React, {useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../../../../context/Contexts';

export const Display = () => {
  const {changeTheme} = useContext(ThemeContext);
  return (
    <Styled.Container>
      <h4 onClick={changeTheme}>Switch Theme</h4>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    text-align: center;
    color: ${props => props.theme.color};
    padding: 10px 5px;
    border-bottom: 1px solid rgb(32, 35, 39);
  `,
};
