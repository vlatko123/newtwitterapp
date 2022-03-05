import React from 'react';
import styled from 'styled-components';


export const TrendingNewsHeader = ({newsTopic}:any) => {
    return(
        <Styled.Container>
            <div>
            <Styled.Paragraph>{newsTopic}</Styled.Paragraph>
            </div>
            <Styled.DotsWrapper>
            <Styled.Span>.</Styled.Span>
            <Styled.Span>.</Styled.Span>
            <Styled.Span>.</Styled.Span>

            </Styled.DotsWrapper>

        </Styled.Container>
    )
}

const Styled = {
    Container: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    `,
    DotsWrapper: styled.div`
    width: 20px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    `,    Paragraph: styled.p`
    color: rgb(110, 118, 125);
    margin: 0;
    font-size: 14px;
    `,
    Span: styled.span`
    color: rgb(110, 118, 125);
    font-size: 30px;
    `
}