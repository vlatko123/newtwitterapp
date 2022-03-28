import React, {useEffect} from 'react';
import {Post} from './components/posts/Post';
import {useFetch} from 'src/hooks/useFetch';
import type {Posts} from '../../../home/components/main/types';
import {AddTweet} from './addTweet/AddTweet';
import {Heading} from '../../../../components copy/heading/Heading';
import {FaCog} from 'react-icons/fa';
import styled from 'styled-components';

export const Main = () => {
  const {data, fetchFromApi, addNewTweet} = useFetch<Posts[]>('posts', []);

  useEffect(() => {
    fetchFromApi();
  }, []);

  return (
    <Styled.Main className="col-6">
      <Heading title="Home" icon={<FaCog />} />
      <AddTweet addNewTweet={addNewTweet} />
      {data?.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
            userId={post.id}
          />
        );
      })}
    </Styled.Main>
  );
};

const Styled = {
  Main: styled.main`
    padding: 0;
    max-width: 100%;
  `,
};
