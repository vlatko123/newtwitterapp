import React, {useState, useEffect} from 'react';
import {Button} from 'src/components copy/button/Button';
import styled from 'styled-components';
import {FaFileImage} from 'react-icons/fa';
import {usePostTweet} from 'src/hooks/usePostTweet';
import type {Posts} from '../types';
import {useForm} from 'react-hook-form';

interface Props {
  addNewTweet: (post: Posts) => void;
}

export const AddTweet = ({addNewTweet}: Props) => {
  const {tweet, error, loading, setTweet, postTweet} =
    usePostTweet(addNewTweet);

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  // useEffect(() => {
  //     addNewTweet(postedTweet)
  // }, [postedTweet])

  if (error) {
    return <div>There is some mistake</div>;
  }

  if (loading) {
    return <div style={{color: 'white'}}>Loading...</div>;
  }

  console.log('error' + typeof errors);

  const onSubmit = (data: any) => {
    postTweet();
  };

  return (
    <Styled.Container>
      <Styled.Avatar src="https://i.pravatar.cc/100" />
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.TextArea
          {...register('tweet', {required: 'u must fill the input'})}
          max-length={140}
          value={tweet}
          onChange={event => setTweet(event.target.value)}
          placeholder="What's happening"
        ></Styled.TextArea>
        <Styled.ActionsWrapper>
          <Styled.IconWrapper>
            <Styled.Icon>
              <FaFileImage color="rgb(29, 155, 240)" />
            </Styled.Icon>{' '}
            <Styled.Icon>
              <FaFileImage color="rgb(29, 155, 240)" />
            </Styled.Icon>{' '}
            <Styled.Icon>
              <FaFileImage color="rgb(29, 155, 240)" />
            </Styled.Icon>{' '}
            <Styled.Icon>
              <FaFileImage color="rgb(29, 155, 240)" />
            </Styled.Icon>{' '}
            <Styled.Icon>
              <FaFileImage color="rgb(29, 155, 240)" />
            </Styled.Icon>{' '}
            <Styled.Icon>
              <FaFileImage color="rgb(29, 155, 240)" />
            </Styled.Icon>
          </Styled.IconWrapper>
          <Button
            type="submit"
            backgroundColor="rgb(29, 155, 240)"
            textColor="white"
            name="Tweet"
            padding="5px 20px"
            onClick={postTweet}
            disabled={Object.keys(errors).length > 0 ? true : false}
          />
        </Styled.ActionsWrapper>
      </Styled.Form>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: flex-start;
  `,
  Avatar: styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 10px 0 0 10px;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start
   
    height: 100px;
    width: 100%;
    margin-left: 10px;
    `,
  TextArea: styled.textarea`
    width: 100%;
    height: 100%;
    background: transparent;
    color: white;
    resize: none;

    &::placeholder {
      color: white;
    }
  `,
  ActionsWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
  `,
  IconWrapper: styled.div`
    display: flex;
  `,
  Icon: styled.div`
    margin-left: 5px;
  `,
};
