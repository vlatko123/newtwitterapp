import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  icon?: JSX.Element;
}

export const Heading = ({title, icon}: Props) => {
  return (
    <Styled.Container>
      <Styled.H>{title}</Styled.H>
      <span>{icon}</span>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.color};
    padding: 15px;
  `,
  H: styled.h4`
    margin: 0;
  `,
};
