import React from 'react';
import styled from 'styled-components';
import {Link, Outlet} from 'react-router-dom';
import {Heading} from 'src/components copy/heading/Heading';

export const More = () => {
  return (
    <Styled.Container>
      <Heading title="More" />
      <Styled.DisplayLink to="display">Display</Styled.DisplayLink>
      <Outlet />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: white;
  `,
  DisplayLink: styled(Link)`
    text-decoration: none !important;
    color: ${props => props.theme.color};
    border-top: 1px solid rgb(32, 35, 39);
    border-bottom: 1px solid rgb(32, 35, 39);
    padding: 10px 5px;
    text-align: center;
  `,
};
