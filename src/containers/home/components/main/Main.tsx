import React, {useContext} from 'react';
import {Post} from './components/posts/Post';
import {AddTweet} from './addTweet/AddTweet';
import {Heading} from '../../../../components copy/heading/Heading';
import {FaCog} from 'react-icons/fa';
import styled from 'styled-components';
import {TweetsContext} from '../../../../context/TweetsContext';
import {PageWrapper} from '../../../../components copy/pageWrapper/PageWrapper';

export const Main = () => {
  const {tweets} = useContext(TweetsContext);

  return (
    <PageWrapper>
      <Styled.Main className="col-6">
        <Heading title="Home" icon={<FaCog />} />
        <AddTweet />
        {tweets?.map(post => {
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
    </PageWrapper>
  );
};

const Styled = {
  Main: styled.main`
    padding: 0;
    max-width: 100%;
  `,
};
