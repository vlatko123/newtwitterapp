import React from 'react';
import styled from 'styled-components';

interface TitleType {
  title: string;
}

export const Title = ({title}: TitleType) => {
  return <Styled.Title>{title}</Styled.Title>;
};

const Styled = {
  Title: styled.h2`
    color: ${props => props.theme.color};
    margin: 10px 0;
    border-top: 2px solid rgb(110, 118, 125);
    padding-top: 10px;
  `,
};
