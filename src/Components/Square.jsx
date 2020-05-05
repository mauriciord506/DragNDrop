import React from 'react';

const Square = ({color, children})=> {

    const fill = color ? "black" : "white";
    const stroke = color? 'white' : 'black'
    return (
        <div className="square" style={{"background-color": fill, "color": stroke }}>
            {children}
        </div>
    )
}

export default Square