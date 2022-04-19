import React from 'react';
import {FaCog} from 'react-icons/fa';
import styled from 'styled-components';

export const Settings = () => {
  return (
    <Styled.Icon>
      <FaCog />
    </Styled.Icon>
  );
};

const Styled = {
  Icon: styled.div`
    font-size: 20px;
    color: white;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    flex: 1;
    align-items: center;
   
    &:hover {
      border-radius: 50px;
      background-color: rgb(32, 35, 39);
    }

  `,
};
