import React from 'react';
import styled from 'styled-components';

export const Mentions = () => {
  return (
    <Styled.Container>
      <Styled.Heading>
        <h1>Nothing to see here — yet</h1>
      </Styled.Heading>
      <div>
        <p>When someone mentions you, you will find it here.</p>
      </div>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
     justify-content: center;
    align-items: center;
    margin-top: 20px;
  `,
  Heading: styled.div`
    color: white;
    display: flex;
   
  `,
};
