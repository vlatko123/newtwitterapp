import React, {useEffect, useState} from 'react';
import {Post} from './components/posts/Post';
import type {Posts as PostType} from '../main/types';

export const Main = () => {
  const [data, setData] = useState<PostType[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <main className="col-6">
      {data.map(post => {
        return <Post key = {post.id} title = {post.title} content ={post.body} />;
      })}
    </main>
  );
};
