import React from 'react';
import styled from 'styled-components';

interface Props{ 
    icon?: JSX.Element;
    text: string; 
}



export const NavLink = ({icon, text}:Props) => {
    return(
       
        <Styled.Container>           
           <Styled.IconWrapper>{icon}</Styled.IconWrapper>
           <Styled.TextWrapper>{text}</Styled.TextWrapper>    
        </Styled.Container>
       
    )
}

const Styled = {
    Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 10px ;
  
     `,
    IconWrapper: styled.div`
    display: flex;
    flex: 1;
    font-size: 30px;
    color: white;
    
    `,
    TextWrapper: styled.div`
    display: flex;
    flex: 4;
    font-size: 30px;
    color: white;
    `
}