import React from 'react';
import styled from 'styled-components';
import {TrendingNews} from '../../../../components copy/trending/TrendingNews';
import {PageWrapper} from '../../../../components copy/pageWrapper/PageWrapper';
import {ExploreSearchInput} from './components/searchinput/ExploreSearchInput';
import {HeadingPicture} from './components/headingPicture/HeadingPicture';
import {News} from './components/whatHappening/News';
import {Title} from './components/whatHappening/Title';

export const Explore = () => {
  return (
    <PageWrapper>
      <Styled.Container className="col-6">
        <ExploreSearchInput />
        <HeadingPicture />
        <Title title="Trends for you" />
        <TrendingNews />
        <Title title="What's happening" />
        <News />
      </Styled.Container>
    </PageWrapper>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
};
