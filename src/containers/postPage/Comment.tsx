import React from 'react';
import styled from 'styled-components';
import {FaRegComment, FaRegHeart, FaRetweet} from 'react-icons/fa';
import {FiShare} from 'react-icons/fi';
import {Action} from '../../containers/home/components/main/components/posts/components/Action';

interface Props {
  title?: string;
  body?: string;
  id?: number;
  userId?: number;
  name?: string;
}

export const Comment = ({name, body, id, userId}: Props) => {
  return (
    <Styled.Container>
      <Styled.AdditionalInfo>{name}</Styled.AdditionalInfo>
      <Styled.Wrapper>
        <Styled.IconWrapper>
          <Styled.Icon src="https://i.pravatar.cc/100" />
        </Styled.IconWrapper>
        <Styled.MainContent>
          <Styled.Content>{body}</Styled.Content>
          <Styled.Actions>
            <Action icon={<FaRegComment />} actionNumber={2} />
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
  Content: styled.p``,
  Actions: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
};
