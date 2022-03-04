import React from 'react';

interface Props {
    backgroundColor: string;
    textColor: string;
    name?: string;
    onClick?: () => void;
}



export const Button = ({name, backgroundColor, textColor = "grey", onClick}: Props) => {
    return(
        <div onClick ={onClick} style = {{backgroundColor: backgroundColor, color: textColor, borderRadius: 20, padding: "15px 30px", display: "flex", alignItems: 'center', justifyContent: 'center'}}>
            {name}
        </div>
    )
}