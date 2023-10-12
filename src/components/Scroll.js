import React from 'react';

const Scroll = (props) =>{


return (
    <div style={{border:'5px solid darkGreen',overflowY:'scroll',height:'500px'}}>
        {props.children}
    </div>
)
}


export default Scroll;