import React, {useState} from 'react';


const Generator = (props) => {
    //initialize useState
    const [backgroundColor, setBackgroundColor] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    //apply CSS styling
    const formStyle = {
        textAlign: 'center',
        marginTop: '20px',
    };

    const labelStyle = {
        fontSize: '1.7em',
        marginRight: '20px',
    };

    const boxStyle = {
        backgroundColor,
        margin: '50px auto 10px 10px',
        display: 'inline-block'
    };

    const inputStyle = {
        backgroundColor: 'white',
        height: '35px',
        width: '300px',
        fontSize: '1.5em',
        borderRadius: '5px',
        marginRight: '10px'
    };

    const buttonStyle = {
        backgroundColor: 'white',
        height: '40px',
        width: '100px',
        fontSize: '1.2em',
        borderRadius: '5px',
        marginLeft: '10px',
        marginTop: '-5px'
    };

    //function for submitting form
    //create new element, apply styling, and add it to DOM
    const createBox = (e) => {
            e.preventDefault();
            let newBox = document.createElement('div')
            newBox.style.backgroundColor = color;
            newBox.style.height = size + 'px';
            newBox.style.width = size + 'px';
            newBox.style.margin = boxStyle.margin;
            newBox.style.display = boxStyle.display;
            let boxLine = document.getElementById('boxes');
            boxLine.appendChild(newBox);
            setColor('');
            setSize('');
    }

    return (
        <div>
            <form onSubmit = {createBox} style = {formStyle}>
                <label style = {labelStyle}>Color</label>
                <input 
                    type = 'text' 
                    value = {color} 
                    onChange = {(e) => {
                        setColor(e.target.value);
                    }} 
                    style = {inputStyle}
                />
                <label style = {labelStyle}>Size (pixels)</label>
                <input 
                    type = 'number'
                    value = {size}
                    onChange = {(e) => {
                        setSize(e.target.value);
                    }}
                    style = {inputStyle}
                />
                <button style = {buttonStyle}>Add</button>
                <div id = 'boxes'>
                </div>
            </form>
        </div>
    );
}

export default Generator;
