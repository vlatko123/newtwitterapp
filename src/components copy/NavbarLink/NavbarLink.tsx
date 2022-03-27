import React, {useContext} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {ThemeContext} from '../../context/Contexts';

interface Props {
  text: string;
  to: string;
  icon?: JSX.Element;
}

export const NavbarLink = ({icon, text, to}: Props) => {
  const {theme} = useContext(ThemeContext);

  return (
    <Styled.Container theme={theme} to={to}>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
      <Styled.TextWrapper>{text}</Styled.TextWrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled(NavLink)<{theme: 'dark' | 'light'}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 10px;
    color: ${props => (props.theme === 'light' ? 'white' : 'black')};
  `,
  IconWrapper: styled.div`
    display: inline-block;
    font-size: 25px;
    margin-right: 10px;
  `,
  TextWrapper: styled.div`
    display: inline-block;
    font-size: 25px;
  `,
};
