import React from 'react'
import styled from 'styled-components';

interface NewsElements {
  title: string;
  content: string;
  thumbnailUrl: string
  id?: number;
}


export const SingleNewsCard = ({title, content, thumbnailUrl} :NewsElements) => {
  return (
    <Styled.Container>
        <Styled.TextWrapper>
            <Styled.Heading>{title}</Styled.Heading>
            <Styled.Main>{content}</Styled.Main>

        </Styled.TextWrapper>
        <Styled.Image>
            <Styled.Pic src={thumbnailUrl} alt="news" />
        </Styled.Image>
    </Styled.Container>
  )
}

const Styled = {
  Container: styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  `,
  TextWrapper: styled.div`
  display: flex;
  flex: 10;
  flex-direction: column;
  align-items: flex-start;
  `,
  Main: styled.h4`
  color: white;
  `,
  Heading: styled.h6`
  color: rgb(110, 118, 125)
  `,
  Image: styled.div`
  display: flex;
  flex: 2;
  `,
  Pic: styled.img`
  border-radius: 10px;
  `
}
