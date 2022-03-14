import React from 'react';
import {TrendingNews} from 'src/components copy/trending/TrendingNews';
import styled from 'styled-components';
import { Main } from '../main/Main';
import {HeadingPicture} from './components/headingPicture/HeadingPicture';
import {ExploreSearchInput} from './components/searchinput/ExploreSearchInput';
import {News} from './components/whatHappening/News';
import {Title} from './components/whatHappening/Title';

export const Explore = () => {
  return (
    <Styled.Container>
      <ExploreSearchInput />
      <HeadingPicture />
      <Title title="Trends for you" />
      <TrendingNews />
      <Title title="What's happening" />
      <News />
      <Main />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
};
