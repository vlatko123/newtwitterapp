import React from 'react';
import styled from 'styled-components';

interface Props {
  actionNumber?: number;
  icon?: JSX.Element;
}

export const Action = ({icon, actionNumber}: Props) => {
  return (
    <Styled.Container>
      <Styled.Number>{icon}</Styled.Number>
      <Styled.Icon>{actionNumber ? actionNumber : 0}</Styled.Icon>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    color: ${props => props.theme.color};
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
