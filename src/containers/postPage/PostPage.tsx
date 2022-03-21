import {useEffect} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch';
import type {Posts} from '../home/components/main/types';
import type {Comments} from '../../containers/home/commentTypes';
import {SingleTweet} from '../postPage/SingleTweet';
import styled from 'styled-components';
import {Heading} from '../../components copy/heading/Heading';
import {FaArrowLeft} from 'react-icons/fa';
import {useFetchComments} from 'src/hooks/useFetchComments';
import {Comment} from '../../containers/postPage/Comment';
import {AddComment} from '../home/components/main/addComment/AddComment';

export const PostPage = (props: any) => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const state = location?.state;
  console.log(state);

  const {data, fetchFromApi} = useFetch<Posts[]>(
    `posts/${params.id}`,
    {} as Posts[]
  );

  useEffect(() => {
    if (!(location?.state as any)?.id) {
      console.log('test' + (location?.state as any));
      fetchFromApi();
    }
  }, [params.id]);

  const {comment, fetchComments, addNewComment} = useFetchComments<Comments[]>(
    `${params.id}/comments`,
    []
  );

  useEffect(() => {
    fetchComments();
  }, [params.id]);

  console.log(comment);

  return (
    <Styled.Container className="col-6">
      <Styled.HeadingWrapper>
        <Styled.SpanWrapper onClick={() => navigate('/')}>
          <FaArrowLeft />
        </Styled.SpanWrapper>
        <Heading title="Tweet" />
      </Styled.HeadingWrapper>
      <SingleTweet title={(state as any).title} body={(state as any).body} />
      <AddComment addNewComment={addNewComment} />
      {comment?.map(com => {
        return <Comment key={com.id} name={com.name} body={com.body} />;
      })}
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    width: 100%;
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
    color: white;
    width: 30px;
    height: 30px;
    &:hover {
      border-radius: 50%;
      background-color: rgb(32, 35, 39);
    }
  `,
};