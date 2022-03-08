import React from 'react';
import styled from 'styled-components';
import {SearchInput} from 'src/components copy/search/SearchInput';
import {Trending} from 'src/components copy/trending/Trending';

export const Search = () => {
  return (
    <Styled.Container className="col-3">
      <SearchInput />
      <Trending />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.aside`
    margin: 0 auto;
    border-left: 1px solid white;
  `,
};
