import React, {useContext} from 'react';
import styled from 'styled-components';
import {SearchInput} from 'src/components copy/search/SearchInput';
import {Trending} from 'src/components copy/trending/Trending';
import {ThemeContext} from '../../context/Contexts';

export const Search = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <Styled.Container theme={theme} className="col-3">
      <SearchInput />
      <Trending />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.aside<{theme: 'dark' | 'light'}>`
    border-left: 1px solid
      ${props => (props.theme === 'light' ? 'white' : 'black')};
  `,
};
