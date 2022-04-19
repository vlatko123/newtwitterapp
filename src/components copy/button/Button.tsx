import React from 'react';
import styled from 'styled-components';

interface Props {
  backgroundColor: string;
  textColor: string;
  padding?: string;
  name?: string;
  type?: React.HTMLProps<HTMLButtonElement>['type'];
  onClick?: () => void;
}

export const Button = ({
  name,
  backgroundColor,
  textColor = 'grey',
  padding,
  onClick,
  type,
  ...rest
}: React.HTMLProps<HTMLButtonElement> & Props) => {
  return (
    //@ts-ignore
    <Styled.ButtonWrapper
      //@ts-ignore
      type={type}
      {...rest}
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: padding,
      }}
    >
      {name}
    </Styled.ButtonWrapper>
  );
};

const Styled = {
  ButtonWrapper: styled.button`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: none;
  `,
};
