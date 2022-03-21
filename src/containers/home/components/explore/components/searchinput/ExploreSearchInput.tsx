import React from 'react';
import styled from 'styled-components';
import {SearchInput} from '../../../../../../components copy/search/SearchInput';
import {Settings} from '../searchinput/Settings';

export const ExploreSearchInput = () => {
  return (
    <Styled.Container>
      <SearchInput />
      <Settings />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex: 11;
    justify-content: space-between;
  `,
};
