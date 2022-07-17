import React, {useState} from 'react';

const Main = (props) => {



    return (
        <div style = {{
            backgroundColor: '#e06666',
            height: '75%',
            width: '60%',
            display: 'inline-block',
            verticalAlign: 'top',
            
        }}>
            {props.children}
        </div>
    )
}

export default Main;