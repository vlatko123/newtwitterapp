import React, {useContext} from 'react';
import {FiMoreHorizontal} from 'react-icons/fi';
import styled from 'styled-components';
import {AuthContext} from '../../context/AuthContext';

export const LogoutBtn = () => {
  const {user, registeredUser, logout} = useContext(AuthContext);
  const username = user?.username;
  const registeredUsername = registeredUser?.registerUsername;
  return (
    <Styled.Container onClick={logout}>
      <Styled.Avatar src="https://i.pravatar.cc/100" alt="profile" />
      <Styled.ProfileWrapper>
        <h6>{username ? username : registeredUsername}</h6>
        <p>@{username ? username : registeredUsername}</p>
      </Styled.ProfileWrapper>
      <Styled.Icon>
        <FiMoreHorizontal />
      </Styled.Icon>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 20px;
    padding: 10px;
    color: white;
    &:hover{
        background: rgba(32, 35, 39, 0.2);
        border-radius: 20px;
    `,
  Avatar: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `,
  ProfileWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Icon: styled.div`
    display: flex;
    align-items: center;
  `,
};
