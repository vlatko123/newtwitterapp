import React from 'react';
import styled from 'styled-components';

interface Props {
  backgroundColor: string;
  onClick?: () => void;
  textColor?: string;
  padding?: string;
  name?: string;
  type?: React.HTMLProps<HTMLButtonElement>['type'];
  borderRadius?: string;
  margin?: string;
  border?: string;
}

export const Button = ({
  name,
  backgroundColor,
  textColor = 'grey',
  padding,
  onClick,
  type,
  margin,
  borderRadius,
  border,
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
        backgroundColor,
        color: textColor,
        padding,
        margin,
        borderRadius,
        border,
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
