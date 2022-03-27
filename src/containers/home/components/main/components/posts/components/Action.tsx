import React, { useContext } from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../../../../../../../context/Contexts';

interface Props {
  actionNumber?: number;
  icon?: JSX.Element;
}

export const Action = ({icon, actionNumber}: Props) => {

  const {theme} = useContext(ThemeContext)

  return (
    <Styled.Container theme={theme}>
      <Styled.Number>{icon}</Styled.Number>
      <Styled.Icon>{actionNumber ? actionNumber : 0}</Styled.Icon>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div<{theme: "dark" | "light"}>`
    display: flex;
    color: ${props => (props.theme === "light" ? "white" : "black")};
    justify-content: space-between;
    align-items: center;
    &:hover {
      color: rgb(29, 155, 240);
    }
  `,
  Icon: styled.div`
    padding: 5px;
  `,
  Number: styled.div``,
};
