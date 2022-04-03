import {useState, useContext, useReducer, useRef} from 'react';
import {TweetsContext} from '../context/TweetsContext';

type Action =
  | {
      type: 'POST_TWEET_SUCCESS';
      payload: {
        tweet: string;
        loading: boolean;
        isError: boolean;
      };
    }
  | {
      type: 'POST_TWEET_ERROR';
      payload: {
        tweet: string;
        loading: boolean;
        isError: true;
      };
    }
  | {
      type: 'POSTING_IS_LOADING';
      payload: {
        tweet: string;
        loading: true;
        isError: boolean;
      };
    }
  | {
      type: 'UPDATE_TWEET';
      payload: {
        tweet: string;
        loading: boolean;
        isError: boolean;
      };
    };

interface State {
  tweet: string;
  loading: boolean;
  isError: boolean;
}

const INITIAL_STATE: State = {
  tweet: '',
  loading: false,
  isError: false,
};

const reducer = (state: State, action: Action) => {
  if (action.type === 'POST_TWEET_SUCCESS') {
    return {
      tweet: action.payload.tweet,
      loading: action.payload.loading,
      isError: action.payload.isError,
    };
  }
  if (action.type === 'POST_TWEET_ERROR') {
    return {
      tweet: action.payload.tweet,
      loading: action.payload.loading,
      isError: action.payload.isError,
    };
  }
  if (action.type === 'POSTING_IS_LOADING') {
    return {
      tweet: action.payload.tweet,
      loading: action.payload.loading,
      isError: action.payload.isError,
    };
  }

  return state;
};

export const usePostTweet = () => {
  const {addNewTweet} = useContext(TweetsContext);
  const [tweet, setTweet] = useState<string>('');
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const postTweet = async () => {
    try {
      dispatch({
        type: 'POSTING_IS_LOADING',
        payload: {
          tweet: '',
          loading: true,
          isError: false,
        },
      });
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

      addNewTweet(data);
      dispatch({
        type: 'POST_TWEET_SUCCESS',
        payload: {
          tweet: data,
          loading: false,
          isError: false,
        },
      });
    } catch (error: any) {
      dispatch({
        type: 'POST_TWEET_ERROR',
        payload: {
          tweet: '',
          loading: false,
          isError: true,
        },
      });
    } finally {
      setTweet('');
    }
  };

  return {
    tweet,
    error: state.isError,
    loading: state.loading,
    setTweet,
    postTweet,
  };
};
