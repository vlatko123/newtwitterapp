import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

interface Props {
  text: string;
  to: string;
  icon?: JSX.Element;
}

export const NavbarLink = ({icon, text, to}: Props) => {
  return (
    //for future code review, this div is extendend to Link wrapper from react-router and because of that we can see "to" property
    <Styled.Container to={to}>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
      <Styled.TextWrapper>{text}</Styled.TextWrapper>
    </Styled.Container>
  );
};

const Styled = {
  //for more clean code, div wrapper is extended to Link wrapper that comes from react-router with all styles that div has
  Container: styled(NavLink)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 10px;
  `,
  IconWrapper: styled.div`
    display: inline-block;
    font-size: 25px;
    color: white;
    margin-right: 10px;
  `,
  TextWrapper: styled.div`
    display: inline-block;
    font-size: 25px;
    color: white;
  `,
};
