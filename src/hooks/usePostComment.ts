import {useState} from 'react';
import type {Comments} from '../containers/home/commentTypes';

export const usePostComment = (addNewComment: (comment: Comments) => void) => {
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const postComment = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments',
        {
          method: 'POST',
          body: JSON.stringify({
            title: 'foo',
            body: comment,
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );

      const data = await response.json();
      addNewComment(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
      setComment('');
    }
  };

  return {comment, error, loading, setComment, postComment};
};
