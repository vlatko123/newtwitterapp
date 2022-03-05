import React from 'react';
import styled from 'styled-components';

interface Props  {
    content: string;
    noOfTweets: string;
}




export const TrendingContent = ({content, noOfTweets}:Props) => {
    return(
        <Styled.Container>
            <Styled.P>{content}</Styled.P>
            <Styled.Span>{noOfTweets}</Styled.Span>
        </Styled.Container>
    )
}

const Styled = {
    Container: styled.div`
    display: flex;
    flex-direction: column;
    `,
    P: styled.p`
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin: 0;
    `,
    Span: styled.span`
    color: rgb(110, 118, 125);
    font-size: 14px;
    `
}