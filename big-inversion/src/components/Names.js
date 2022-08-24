import React, { Component } from 'react'

class Names extends Component {
    constructor(props){
        super(props)
        this.state = {
            newAge: this.props.age
        }
    }
    increaseAge = (age) => {
        console.log('hi')
        this.setState({newAge: age+1})
    }




    render(){
        const {firstName, lastName, hairColor} = this.props
        return <div className='nameCard'>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {this.state.newAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick = {()=>this.increaseAge(this.state.newAge)}>Birthday button for {firstName} {lastName}</button>
        </div>
    }
}

export default Names;
