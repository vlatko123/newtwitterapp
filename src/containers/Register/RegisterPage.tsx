import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';
import {FaTwitter} from 'react-icons/fa';
import {Navigate} from 'react-router-dom';
import {ModalContext} from '../../context/ModalContext';
import {ModalPopup} from '../../components copy/modal/ModalPopup';
import {Button as Btn} from '../../components copy/button/Button';
import {AuthContext} from '../../context/AuthContext';

export const RegisterPage = () => {
  const {handleShow} = useContext(ModalContext);
  const {userIsRegistered} = useContext(AuthContext);
  const navigate = useNavigate();

  if (userIsRegistered) {
    return <Navigate to="/" replace />;
  }
  return (
    <Styled.Container>
      <ModalPopup />

      <Styled.FrontPart>
        <Styled.Logo>
          <img src={'twitter.png'} alt="twitter-logo" style={{width: '100%'}} />
        </Styled.Logo>

        <Styled.Buttons>
          <Styled.Icon>
            <FaTwitter />
          </Styled.Icon>
          <Styled.Heading>Happening now</Styled.Heading>

          <Styled.ButtonsWrapper>
            <Styled.RegisterNow>
              <h4>Join twitter today</h4>
              <Btn
                name="Sign up with google"
                backgroundColor="white"
                color="black"
                padding="10px"
                borderRadius="20px"
                margin="10px 0"
              />
              <Btn
                name="Sign up with Apple"
                backgroundColor="white"
                color="black"
                padding="10px"
                borderRadius="20px"
              />
              <Styled.Span>or</Styled.Span>
              <Button
                variant="primary"
                onClick={handleShow}
                style={{
                  margin: '10px 0',
                  padding: '10px',
                  borderRadius: '20px',
                }}
              >
                Sign up
              </Button>
            </Styled.RegisterNow>
            <Styled.LoginHeader>Already have an account</Styled.LoginHeader>
            <Btn
              name="Sign in"
              padding="10px"
              margin="10px 0"
              color="rgb(29, 155, 240)"
              border-radius="20px"
              backgroundColor="transparent"
              border="1px solid rgb(29, 155, 240)"
              onClick={() => navigate('/login')}
            />
          </Styled.ButtonsWrapper>
        </Styled.Buttons>
      </Styled.FrontPart>
      <div>
        <Styled.List>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </Styled.List>
      </div>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.color};
  `,
  FrontPart: styled.div`
    height: 100%;
    display: flex;
  `,
  Logo: styled.div`
    height: 100%;
    display: flex;
    flex: 7;
  `,
  Buttons: styled.div`
    height: 100%;
    display: flex;
    flex: 5;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
  `,
  ButtonsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  `,
  RegisterNow: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Icon: styled.div`
    font-size: 50px;
    margin-bottom: 20px;
  `,
  Heading: styled.h1`
    font-size: 50px;
    font-weight: bold;
  `,
  Span: styled.span`
    text-align: center;
  `,
  LoginHeader: styled.h5`
    margin: 10px 0;
  `,
  List: styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
  `,
};
