import React from 'react';
import styled from 'styled-components';

interface Props {
  backgroundColor: string;
  textColor: string;
  name?: string;
  onClick?: () => void;
}

export const Button = ({
  name,
  backgroundColor,
  textColor = 'grey',
  onClick,
}: Props) => {
  return (
    <Styled.ButtonWrapper
      onClick={onClick}
      style={{backgroundColor: backgroundColor, color: textColor}}
    >
      {name}
    </Styled.ButtonWrapper>
  );
};

const Styled = {
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 15px 30px;
  `,
};
