import React, {useContext} from 'react';
import styled from 'styled-components';
import {PageWrapper} from '../../../../../components copy/pageWrapper/PageWrapper';
import {FaArrowLeft} from 'react-icons/fa';
import {Heading} from '../../../../../components copy/heading/Heading';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../../../../../context/AuthContext';
import {Button as Btn} from '../../../../../components copy/button/Button';
import {ModalContext} from '../../../../../context/ModalContext';
import {GoCalendar} from 'react-icons/go';
import {EditProfile} from '../../../../../components copy/modal/EditProfile';

export const Profile = () => {
  const navigate = useNavigate();
  const {user, registeredUser} = useContext(AuthContext);
  const username = user?.username;
  const registeredUsername = registeredUser?.registerUsername;

  const {handleShow} = useContext(ModalContext);

  return (
    <PageWrapper>
      <EditProfile />
      <Styled.Container className="col-6">
        <Styled.HeadingWrapper>
          <Styled.SpanWrapper onClick={() => navigate('/')}>
            <FaArrowLeft />
          </Styled.SpanWrapper>
          {/*@ts-ignore*/}
          <Heading title={username ? username : registeredUsername} />
        </Styled.HeadingWrapper>
        <Styled.HeadingImage>
          <img
            src="https://images.unsplash.com/photo-1528465424850-54d22f092f9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="cover"
            style={{width: '100%'}}
          />
        </Styled.HeadingImage>
        <Styled.Wrapper>
          <Styled.AvatarWrapper>
            <Styled.Avatar src="https://i.pravatar.cc/100" alt="avatar" />
          </Styled.AvatarWrapper>

          <Btn
            name="Edit Profile"
            backgroundColor="transparent"
            color="white"
            borderRadius="10px"
            border="2px solid white"
            margin="15px 10px 0 0"
            onClick={handleShow}
          />
        </Styled.Wrapper>
        <Styled.ProfileInfo>
          <h4>{username ? username : registeredUsername}</h4>
          <h5>{username ? username : registeredUsername}</h5>
          <div>
            <GoCalendar /> Joined date
          </div>
          <Styled.Followers>
            <Styled.Following>10 Following</Styled.Following>
            <p>10 Followers</p>
          </Styled.Followers>
        </Styled.ProfileInfo>
      </Styled.Container>
    </PageWrapper>
  );
};

const Styled = {
  Container: styled.div`
    width: 100%;
    color: white;
    padding: 0;
  `,
  HeadingWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10px;
  `,
  SpanWrapper: styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    width: 30px;
    height: 30px;
    &:hover {
      border-radius: 50%;
      background-color: rgb(32, 35, 39);
    }
  `,
  HeadingImage: styled.div`
    width: 100%;
    border-bottom: 3px solid white;
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  AvatarWrapper: styled.div`
    display: flex;
    flex: 5;
    margin: -10% 0 0 10px;
  `,
  Avatar: styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid white;
  `,
  ProfileInfo: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 30px 0 20px 20px;
  `,
  Followers: styled.div`
    display: flex;
  `,
  Following: styled.p`
    margin-right: 10px;
  `,
};
