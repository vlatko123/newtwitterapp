import {useState} from 'react';
import type {Posts} from '../containers/home/components/main/types';

interface Props {
  data: Posts[];
  fetchFromApi: () => Promise<void>;
  addNewTweet: (post: Posts) => void;
}

export const useFetch = (url: string, initialState: Posts[]): Props => {
  const [data, setData] = useState<Posts[]>(initialState);

  const fetchFromApi = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`);
    const data = await response.json();
    setData(data);
  };

  const addNewTweet = (post: Posts) => {
    setData(prevState => [post, ...prevState]);
  };

  return {data, fetchFromApi, addNewTweet};
};
