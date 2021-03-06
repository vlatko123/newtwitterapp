import React from 'react';
import {FaRegComment, FaRegHeart, FaRetweet} from 'react-icons/fa';
import {FiShare} from 'react-icons/fi';
import styled from 'styled-components';
import {Action} from '../../containers/home/components/main/components/posts/components/Action';

export const SingleTweet = ({title, body}: any) => {
  const date = new Date();

  return (
    <Styled.Container>
      <Styled.Title>
        <Styled.Image src="https://i.pravatar.cc/150" alt="avatar" />
        <Styled.Heading>{title}</Styled.Heading>
      </Styled.Title>
      <Styled.Content>
        <Styled.Body>{body}</Styled.Body>
        <Styled.Date>{date.toLocaleDateString()} Twitter Web App</Styled.Date>
      </Styled.Content>
      <Styled.Actions>
        <Styled.ActionSpan>0 Retweets</Styled.ActionSpan>
        <Styled.ActionSpan>0 Likes</Styled.ActionSpan>
      </Styled.Actions>
      <Styled.Icon>
        <Action icon={<FaRegComment />} />
        <Action icon={<FaRetweet />} />
        <Action icon={<FaRegHeart />} />
        <Action icon={<FiShare />} />
      </Styled.Icon>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
  `,
  Title: styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
  `,
  Image: styled.img`
  display: flex:
  flex: 1;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
  `,
  Heading: styled.h5`
    display: flex;
    flex: 11;
    font-size: 20px;
    color: ${props => props.theme.color};
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-bottom: 1px solid rgb(32, 35, 39);
  `,
  Body: styled.h2`
    color: ${props => props.theme.color};
    margin-bottom: 20px;
  `,
  Date: styled.p`
    color: rgb(32, 35, 39);
    font-size: 20px;
  `,
  Actions: styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    border-bottom: 1px solid rgb(32, 35, 39);
  `,
  ActionSpan: styled.span`
    margin: 10px;
    font-size: 20px;
    color: rgb(32, 35, 39);
  `,
  Icon: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 50px 20px 50px;
    font-size: 25px;
  `,
};
