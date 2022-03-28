import React, {useState} from 'react';
import type {Comments} from '../containers/home/commentTypes';

interface Props<T> {
  comment: Comments[];
  fetchComments: () => Promise<void>;
  addNewComment: (comment: Comments) => void;
}

export const useFetchComments = <T>(
  url: string,
  initialState: Comments[]
): Props<T> => {
  const [comment, setComment] = useState<Comments[]>(initialState);

  const fetchComments = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${url}`
    );
    const data = await response.json();
    setComment(data);
  };

  const addNewComment = (comment: Comments) => {
    setComment(prevState => [comment, ...prevState]);
  };

  return {comment, fetchComments, addNewComment};
};
