import React from 'react';

const sizeButton = (props)=>{
    return(
    <button className={`size_button ${props.addedClass}`} onClick={props.clicked}>{props.text}</button>
    )
}



export default sizeButton ;