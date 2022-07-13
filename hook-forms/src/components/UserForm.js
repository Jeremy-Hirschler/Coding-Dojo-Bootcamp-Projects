import React, {useState} from 'react';

const UserForm = () => {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const createUser = (e) => {

        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirm};
        console.log("Hello", newUser);
    }


    return (
        <div className='container'>
            <form onSubmit = {createUser} className = 'form'>
                <div>
                    <label>First Name: </label>
                    <input type = "text" value = {firstName} onChange = {(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type = "text" value = {lastName} onChange = {(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type = "text" value = {email} onChange = {(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type = "password" value = {confirm} onChange = {(e) => setConfirm(e.target.value)}/>
                </div>
            </form>
            <div className = 'display'>
                <h4>Your Form Data</h4>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm}</p>
            </div>
        </div>

    );
}

export default UserForm;