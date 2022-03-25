import React from 'react';
import {FaCog} from 'react-icons/fa';
import styled from 'styled-components';

interface Props {
  title: string;
}

export const TrendingTitle = ({title}: Props) => {
  return (
    <Styled.Container>
      <Styled.Heading>{title}</Styled.Heading>
      <Styled.Span>
        <FaCog />
      </Styled.Span>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: space-between !important;
  `,
  Heading: styled.h1`
    font-size: 25px;
    color: white;
  `,
  Span: styled.span`
    font-size: 25px;
    color: white;
  `,
};
