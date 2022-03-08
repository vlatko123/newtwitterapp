import React from 'react';
import styled from 'styled-components';

export const SearchInput = () => {
  return (
    <Styled.Container>
      <Styled.Input type="text" placeholder="Search Twitter" />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    width: 100%;
    margin: 10px;
  `,
  Input: styled.input`
    padding: 10px;
    width: 100%;
    border-radius: 20px;
    background-color: rgb(32, 35, 39);
    border: none;
  `,
};
