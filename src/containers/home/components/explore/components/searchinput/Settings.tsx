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
    flex: 1;
    align-items: center;
  `,
};
