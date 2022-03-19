import {useState} from 'react';
import type {Posts} from '../containers/home/components/main/types';

export const usePostTweet = (addNewTweet: (post: Posts) => void) => {
  const [tweet, setTweet] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  console.log(tweet);

  const postTweet = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          body: JSON.stringify({
            title: 'foo',
            body: tweet,
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );

      const data = await response.json();
      // console.log('response', data);
      addNewTweet(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
      setTweet('');
    }
  };

  return {tweet, error, loading, setTweet, postTweet};
};
