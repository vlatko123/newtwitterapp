import React from 'react';
import styled from 'styled-components';
import {Link, Outlet} from 'react-router-dom';
import {Heading} from '../../../../components copy/heading/Heading';
import {PageWrapper} from '../../../../components copy/pageWrapper/PageWrapper';

export const More = () => {
  return (
    <PageWrapper>
      <Styled.Container className="col-6">
        <Heading title="More" />
        <Styled.DisplayLink to="display">Display</Styled.DisplayLink>
        <Outlet />
      </Styled.Container>
    </PageWrapper>
  );
};

const Styled = {
  Container: styled.div`
    width: 100%;
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
