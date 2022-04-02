import React from 'react';
import styled from 'styled-components';
import {FaStar} from 'react-icons/fa';

interface Props {
  notificationHeading: string;
  notificationContent: string;
}

export const SingleNotification = ({
  notificationHeading,
  notificationContent,
}: Props) => {
  return (
    <Styled.Container>
      <Styled.Icon>
        <FaStar />
      </Styled.Icon>
      <Styled.Tweet>
        <Styled.ImgWrapper>
          <Styled.Imgage src="https://i.pravatar.cc/100" alt="avatar" />
          <Styled.DotsWrapper>
            <Styled.Span>.</Styled.Span>
            <Styled.Span>.</Styled.Span>
            <Styled.Span>.</Styled.Span>
          </Styled.DotsWrapper>
        </Styled.ImgWrapper>
        <Styled.NotificationHeading>
          <Styled.Heading>{notificationHeading}</Styled.Heading>
          <Styled.Content>{notificationContent}</Styled.Content>
        </Styled.NotificationHeading>
      </Styled.Tweet>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    border-bottom: 1px solid white;
    margin-top: 10px;
  `,
  Icon: styled.div`
    display: flex;
    flex: 1
    border: 1px solid white;
    color: purple;
    padding: 15px;
    font-size: 40px;
    `,
  Tweet: styled.div`
    display: flex;
    flex-direction: column;
    flex: 10;
    padding: 10px;
  `,
  DotsWrapper: styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border-radius: 50%;
      background-color: rgb(32, 35, 39);
    }
  `,
  Span: styled.span`
    color: rgb(110, 118, 125);
    font-size: 40px;
    padding-bottom: 45%;
  `,
  ImgWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Imgage: styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
  `,
  NotificationHeading: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  `,
  Heading: styled.h3`
    color: white;
  `,
  Content: styled.p`
    color: white;
  `,
};
