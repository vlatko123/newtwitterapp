import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import styled from 'styled-components';
import {Settings} from '../explore/components/searchinput/Settings';
import {PageWrapper} from '../../../../components copy/pageWrapper/PageWrapper';

export const Notifications = () => {
  return (
    <PageWrapper>
      <Styled.Container className="col-6">
        <Styled.Header>
          <Styled.Heading>Notifications</Styled.Heading>
          <Settings />
        </Styled.Header>
        <Styled.Nav>
          <Link to="all">All</Link>
          <Link to="mentions">Mentions</Link>
        </Styled.Nav>
        <Outlet />
      </Styled.Container>
    </PageWrapper>
  );
};

const Styled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  Header: styled.header`
    display: flex;
    justify-content: center;
    padding: 10px 5px;
    margin: 10px 0;
  `,
  Heading: styled.h3`
    display: flex;
    flex: 11;
    color: ${props => props.theme.color};
  `,
  Nav: styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid ${props => props.theme.color};
    padding-bottom: 1rem;
  `,
};
