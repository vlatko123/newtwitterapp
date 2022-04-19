import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {FaRegComment, FaRegHeart, FaRetweet} from 'react-icons/fa';
import {FiShare} from 'react-icons/fi';
import {Action} from '../posts/components/Action';

interface Props {
  title?: string;
  body?: string;
  id?: number;
  userId?: number;
  name?: string;
}

export const Post = ({title, body, id, userId}: Props) => {
  const navigate = useNavigate();

  return (
    <Styled.Container
      onClick={() =>
        navigate(`/post/${id}`, {state: {title, body, id, userId}})
      }
    >
      <Styled.AdditionalInfo>Bitcoin Cryptocurrency</Styled.AdditionalInfo>
      <Styled.Wrapper>
        <Styled.IconWrapper>
          <Styled.Icon src="https://i.pravatar.cc/100" />
        </Styled.IconWrapper>
        <Styled.MainContent>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Content>{body}</Styled.Content>
          <Styled.Actions>
            <Action icon={<FaRegComment />} actionNumber={0} />
            <Action icon={<FaRetweet />} actionNumber={3526} />
            <Action icon={<FaRegHeart />} actionNumber={4678} />
            <Action icon={<FiShare />} actionNumber={4444} />
          </Styled.Actions>
        </Styled.MainContent>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgb(32, 35, 39);
    border-bottom: 1px solid rgb(32, 35, 39);
    justify-content: center;
    align-item: center;
    width: 100%;
    padding: 10px;
    color: ${props => props.theme.color};
    &:hover {
      background: rgba(32, 35, 39, 0.2);
    }
  `,
  AdditionalInfo: styled.span`
    width: 100%;
    padding: 5px;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  `,
  IconWrapper: styled.div`
    display: flex;
    flex: 1;
    padding: 10px;
  `,
  Icon: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `,
  MainContent: styled.div`
    display: flex;
    flex: 10;
    flex-direction: column;
    padding: 10px;
  `,
  Title: styled.h4`
    margin: 0;
    padding: 0;
    text-align: left;
  `,
  Content: styled.p``,
  Actions: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
};
