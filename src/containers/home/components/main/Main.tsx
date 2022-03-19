import React, {useEffect} from 'react';
import {Post} from './components/posts/Post';
import {useFetch} from 'src/hooks/useFetch';
import type {Posts} from '../../../home/components/main/types';
import { AddTweet } from './addTweet/AddTweet';

export const Main = () => {
  const {data, fetchFromApi, addNewTweet} = useFetch<Posts[]>('posts', []);
  // console.log(data)

  useEffect(() => {
    fetchFromApi()
  },[])

  return (
    <main className="col-6">
      <AddTweet addNewTweet ={addNewTweet} />
      {data?.map(post => {
        return (
          <Post
            //instead of sending element separately we have two more ways for sending as a props
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
            userId={post.id}

            //one way: everything that is hidden in post will be sent as a prop and we can extract it there
            // {post = post}
            //second way:Using spread operator and same will be with the result
            // {...post}
          />
        );
      })}
    </main>
  );
};
