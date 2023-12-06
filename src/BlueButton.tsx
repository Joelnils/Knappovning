import React from 'react';
interface Buttoncolors{
    color: string,
    text: string,
    onClick: () => void;
}

export const Buttons: React.FC<Buttoncolors> = ({ color, text, onClick }) => {
    const style = {
      backgroundColor: color,
      color: 'white', 
      padding: '10px', 
      border: 'none',  
      cursor: 'pointer' 
    };


    return (
        <button style={style} onClick={onClick}>
          {text}
        </button>
      );
    };