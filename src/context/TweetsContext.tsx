import React, {useEffect} from 'react';
import type {Posts} from '../containers/home/components/main/types';
import {useFetch} from '../hooks/useFetch';

interface ContextValues {
  tweets: Posts[];
  fetchFromApi: () => void;
  addNewTweet: (tweets: Posts) => void;
}

export const TweetsContext = React.createContext<ContextValues>({
  tweets: [],
  fetchFromApi: () => {},
  addNewTweet: () => {},
});

export const TweetsContextsConstructor = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const {
    data: tweets,
    fetchFromApi,
    addNewTweet,
  } = useFetch<Posts[]>('posts', []);

  useEffect(() => {
    fetchFromApi();
  }, []);

  return (
    <TweetsContext.Provider value={{tweets: tweets, fetchFromApi, addNewTweet}}>
      {children}
    </TweetsContext.Provider>
  );
};
