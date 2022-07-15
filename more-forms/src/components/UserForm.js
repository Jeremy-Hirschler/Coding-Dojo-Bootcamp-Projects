import React, {useState} from 'react';

const UserForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    return (
        <div className='container'>
            <form className = 'form'>
                <div>
                    <label>First Name: </label>
                    <input 
                    type = 'text' 
                    value = {firstName} 
                    onChange = {(e) => {
                        setFirstName(e.target.value);
                    }}
                    />
                </div>
                {
                    firstName.length < 2 ? 
                    <p>First Name must be at least 2 characters</p> :
                    <p></p>
                }
                <div>
                    <label>Last Name: </label>
                    <input 
                    type = 'text' 
                    value = {lastName} 
                    onChange = {(e) => {
                        setLastName(e.target.value);
                    }}
                    />
                </div>
                {
                    lastName.length < 2 ? 
                    <p>Last Name must at least than 2 characters</p> :
                    <p></p>
                }
                <div>
                    <label>Email: </label>
                    <input 
                    type = 'text' 
                    value = {email} 
                    onChange = {(e) => setEmail(e.target.value)} 
                    />
                </div>
                {
                    email.length < 5 ? 
                    <p>Email must be at least 5 characters</p> :
                    <p></p>

                }
                <div>
                    <label>Password: </label>
                    <input 
                    type = 'password' 
                    value = {password} 
                    onChange = {(e) => setPassword(e.target.value)} 
                    />
                </div>
                {
                    password.length < 8 ? 
                    <p>Password must be at least 8 characters</p> :
                    <p></p>
                }
                {
                    password != confirm ? 
                    <p>Passwords must match</p> :
                    <p></p>
                }
                <div>
                    <label>Confirm Password: </label>
                    <input 
                    type = 'password' 
                    value = {confirm} 
                    onChange = {(e) => setConfirm(e.target.value)} 
                    />
                </div>
                
                




            </form>
        </div>
    );





}

export default UserForm;