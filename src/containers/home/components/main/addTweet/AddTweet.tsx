import React from 'react';
import {Button} from 'src/components copy/button/Button';
import styled from 'styled-components';
import {FiImage} from 'react-icons/fi';
import {RiFileGifLine} from 'react-icons/ri';
import {BiPoll} from 'react-icons/bi';
import {BsEmojiSmile} from 'react-icons/bs';
import {AiOutlineSchedule} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {usePostTweet} from 'src/hooks/usePostTweet';
import {useForm} from 'react-hook-form';

export const AddTweet = () => {
  const {theme} = useContext(ThemeContext);
  const {tweet, error, loading, postTweet, setTweet} = usePostTweet();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  if (error) {
    return <div>There is some mistake</div>;
  }

  if (loading) {
    return <div style={{color: 'white'}}>Loading...</div>;
  }

  const onSubmit = (data: any) => {
    postTweet();
  };

  const disabledBtn = (tweet: string) => {
    if (tweet.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Styled.Container>
      <Styled.Avatar src="https://i.pravatar.cc/100?img=52" />
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.TextArea
          {...register('tweet', {required: 'u must fill the input'})}
          maxLength={140}
          value={tweet}
          onChange={event => setTweet(event.target.value)}
          placeholder="What's happening"
        ></Styled.TextArea>
        <Styled.ActionsWrapper>
          <Styled.IconWrapper>
            <Styled.Icon>
              <FiImage color="rgb(29, 155, 240)" />
            </Styled.Icon>
            <Styled.Icon>
              <RiFileGifLine color="rgb(29, 155, 240)" />
            </Styled.Icon>
            <Styled.Icon>
              <BiPoll color="rgb(29, 155, 240)" />
            </Styled.Icon>
            <Styled.Icon>
              <BsEmojiSmile color="rgb(29, 155, 240)" />
            </Styled.Icon>
            <Styled.Icon>
              <AiOutlineSchedule color="rgb(29, 155, 240)" />
            </Styled.Icon>
            <Styled.Icon>
              <GoLocation color="rgb(29, 155, 240)" />
            </Styled.Icon>
          </Styled.IconWrapper>
          <div>
            <Button
              type="submit"
              backgroundColor="rgb(29, 155, 240)"
              textColor="white"
              name="Tweet"
              padding="5px 20px"
              onClick={postTweet}
              disabled={disabledBtn(tweet)}
            />
          </div>
        </Styled.ActionsWrapper>
      </Styled.Form>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: flex-start;
    padding-bottom: 10px;
    border-top: 0.5px solid rgb(32, 35, 39);
    border-bottom: 0.5px solid rgb(32, 35, 39);
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
    color: ${props => props.theme.color};
    resize: none;
    border: none;
    padding: 10px 0;
    &::placeholder {
      padding: 10px 0;
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
    flex: 11;
    font-size: 20px;
  `,
  Icon: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3%;
  `,
};
