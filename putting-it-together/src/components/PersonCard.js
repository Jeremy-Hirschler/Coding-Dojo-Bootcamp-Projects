import React, {useState} from 'react';


const PersonCard = (props) => {

    const {firstName, lastName, age, hairColor} = props;
    const [birthdays, setbirthdays] = useState(age);
    const updateAge = () => {
        setbirthdays(birthdays + 1);
    }

    return (
        <div className = 'container'>
            <div className = 'person'>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {birthdays}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
            <button onClick = {updateAge}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}


export default PersonCard;