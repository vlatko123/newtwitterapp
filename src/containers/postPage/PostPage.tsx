// import {Post} from 'containers/home/components/main/components/posts/Post';
import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import type {Posts} from '../home/components/main/types';

export const PostPage = (props: any) => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const params = useParams();

  const location = useLocation();
  // const state = location.state as Posts;
  // console.log(state);

  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts${params.id}`
      );
      const data = await response.json();
      setData(data);
    };
    if ((!location?.state as any)?.id) {
      fetchFromApi();
    }
  }, [params.id]);
  return (
    <>
      <div>Posts</div>
      <button onClick={() => navigate('/')}>Back to all posts</button>
    </>
  );
};
