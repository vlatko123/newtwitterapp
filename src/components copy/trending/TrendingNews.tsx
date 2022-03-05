import React from 'react';
import styled from 'styled-components';
import { TrendingContent } from './TrendingContent';
import { TrendingNewsHeader } from './TrendingNewsHeader';

export const TrendingNews = () => {
    return(
        <Styled.Container>
            <TrendingNewsHeader newsTopic = "Politics - Trending" />
            <TrendingContent content = "#UK Today" noOfTweets = "331K Tweets" />
            <TrendingNewsHeader newsTopic = "Trending in North Macedonia" />
            <TrendingContent content = "Macedonia" noOfTweets = "3.592K Tweets" />
            <TrendingNewsHeader newsTopic = "Politics - Trending" />
            <TrendingContent content = "Rusia" noOfTweets = "10.000K Tweets" />
            <TrendingNewsHeader newsTopic = "Politics - Trending" />
            <TrendingContent content = "European" noOfTweets = "163K Tweets" />
            <TrendingNewsHeader newsTopic = "Sports" />
            <TrendingContent content = "World cup" noOfTweets = "327K Tweets" />
        </Styled.Container>
    )
}

const Styled = { 
    Container: styled.div`
    margin: 10px 2px;
    
    `
}