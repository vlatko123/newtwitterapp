import React from 'react';
import styled from 'styled-components';
import {useContext} from 'react';
import {ThemeContext} from '../../context/Contexts';

interface Props {
  title: string;
  icon?: JSX.Element;
}

export const Heading = ({title, icon}: Props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Styled.Container theme={theme}>
      <Styled.H >{title}</Styled.H>
      <span>{icon}</span>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div<{theme: 'dark' | 'light'}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => (props.theme === 'light' ? 'white' : 'black')};;
    padding: 15px;
  `,
  H: styled.h4`
    margin: 0;
  `,
};
