import React from 'react';
import styled from 'styled-components';
import {TrendingNews} from './TrendingNews';
import {TrendingTitle} from './TrendingTitle';

export const Trending = () => {
  return (
    <Styled.Container>
      <TrendingTitle />
      <TrendingNews />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    width: 100%;
    margin: 10px;
    background-color: rgb(32, 35, 39);
    padding: 15px;
    border-radius: 20px;
    
  `,
};
