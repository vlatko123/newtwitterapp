import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {SingleNewsCard} from './SingleNewsCard';

interface NewsElements {
  title: string;
  content: string;
  thumbnailUrl: string;
  id?: number;
}

export const News = () => {
  const [photo, setPhoto] = useState<NewsElements[]>([]);

  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos'
      );
      const data = await response.json();
      setPhoto(data);
    };
    fetchFromApi();
  }, []);
  return (
    <Styled.Container>
      {photo?.slice(0,7).map(item => {
        return (
          <SingleNewsCard
            key={item.id}
            title="Whats new for you"
            content={item.title}
            thumbnailUrl={item.thumbnailUrl}
          />
        );
      })}
    </Styled.Container>
  );
};

const Styled = {
    Container: styled.div`
    border-bottom: 2px solid rgb(110, 118, 125);
    margin-bottom: 10px;
    `
}
