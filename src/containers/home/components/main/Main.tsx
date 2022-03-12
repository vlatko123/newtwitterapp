import React, {useEffect, useState} from 'react';
import {Post} from './components/posts/Post';
import type {Posts as PostType} from '../main/types';

export const Main = () => {
  const [data, setData] = useState<PostType[]>([]);

  useEffect(() => {
    //old way will stay here for example
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => res.json())
    //   .then(data => setData(data));
    //new way with async-await
    const fetchFromApi = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data: PostType[] = await response.json();
      setData(data);
    };
    fetchFromApi();
  }, []);

  return (
    <main className="col-6">
      {data?.map(post => {
        return (
          <Post
          //instead of sending element separately we have two more ways for sending as a props
            key={post.id}
            // title={post.title}
            // content={post.body}
            // id={post.id}
            // userId={post.id}

            //one way: everything that is hidden in post will be sent as a prop and we can extract it there
            // {post = post}
            //second way:Using spread operator and same will be with the result 
            {...post}
          />
        );
      })}
    </main>
  );
};
