import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

interface Pictures {
  albumId: number;
  id: number;
  url?: string;
  thumbnailUrl?: string;
}

export const HeadingPicture = () => {
  const [state, setState] = useState<Pictures>();

  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos/1'
      );
      const data = await response.json();

      setState(data);
    };

    fetchFromApi();
  }, []);
  return (
    <Styled.Container>
      <img style={{width: '100%'}} src={state?.url} alt="pic" />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    border-bottom: 2px solid rgb(110, 118, 125);
  `,
};
