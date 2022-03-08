import React from 'react';
import styled from 'styled-components';

interface Props {
  actionNumber: number;
  icon?: JSX.Element;
}

export const Action = ({actionNumber, icon}: Props) => {
  return (
    <Styled.Container>
      <Styled.Icon>{actionNumber}</Styled.Icon>
      <Styled.Number>{icon}</Styled.Number>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    color: white;
  `,
  Icon: styled.div``,
  Number: styled.div`
    margin-left: 10px;
  `,
};
