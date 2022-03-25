import {Button} from '../../../../../components copy/button/Button';
import styled from 'styled-components';
import {FiImage} from 'react-icons/fi';
import {RiFileGifLine} from 'react-icons/ri';
import {BiPoll} from 'react-icons/bi';
import {BsEmojiSmile} from 'react-icons/bs';
import {AiOutlineSchedule} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {usePostComment} from '../../../../../hooks/usePostComment';
import type {Comments} from '../../../commentTypes';
import {useForm} from 'react-hook-form';

interface Props {
  addNewComment: (comment: Comments) => void;
}

export const AddComment = ({addNewComment}: Props) => {
  const {comment, error, loading, setComment, postComment} =
    usePostComment(addNewComment);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onChange'});

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div style={{color: 'white'}}>Loading...</div>;
  }

  const onSubmit = (data: any) => {
    postComment();
  };
  const disabledBtn = (comment: string) => {
    if (comment.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  console.log('errors' + errors);

  return (
    <Styled.Container>
      <Styled.Avatar src="https://i.pravatar.cc/100?img=52" />
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.TextArea
          {...register('tweet', {required: true})}
          maxLength={140}
          value={comment}
          onChange={event => setComment(event.target.value)}
          placeholder="Tweet your reply"
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
              onClick={postComment}
              disabled={disabledBtn(comment)}
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
    color: white;
    resize: none;
    border: none;
    padding: 10px 0 10px 0;
    &::placeholder {
      padding: 10px 0 10px 0;
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
