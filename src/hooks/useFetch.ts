import {useState} from 'react';
import type {Posts} from '../containers/home/components/main/types';

interface Props<T> {
  data: Posts[];
  fetchFromApi: () => Promise<void>;
  addNewTweet: (post: Posts) => void;
}

export const useFetch = <T>(url: string, initialState: Posts[]): Props<T> => {
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
