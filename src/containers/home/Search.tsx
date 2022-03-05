import React from 'react';
import styled from 'styled-components';
import { SearchInput } from '../../components copy/search/SearchInput';
import { Trending } from '../../components copy/trending/Trending';


export const Search = () => {
    return(
        <Styled.Container className='col-3'style ={{height: '100vh'}}>
            <SearchInput />
            <Trending />
            </Styled.Container>
    )
}

const Styled = {
    Container: styled.aside`
    margin: 0 auto;

    `
}