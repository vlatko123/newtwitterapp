import React from 'react';
import {TrendingNews} from 'src/components copy/trending/TrendingNews';
import styled from 'styled-components';
import {HeadingPicture} from './components/headingPicture/HeadingPicture';
import {ExploreSearchInput} from './components/searchinput/ExploreSearchInput';
import {News} from './components/whatHappening/News';
import {Title} from './components/whatHappening/Title';
import {PageWrapper} from '../../../../components copy/pageWrapper/PageWrapper';

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
