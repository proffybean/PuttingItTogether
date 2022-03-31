import React, { Component } from 'react';
    
class PersonCard extends Component {
    constructor(props){  
        super(props)    
        this.state = {
            age: this.props.age
        }
    }

    advanceAge = (newAge) =>{
        this.setState({age: newAge})
    }


    render() {
        return (
            <div className='card'>
                <h2>{this.props.lastName}, {this.props.firstName}</h2>
                <div>Age: {this.state.age}</div>
                <div>Hair Color: {this.props.hairColor}</div>
                <button onClick={ () => this.advanceAge(this.state.age+1) }>Birthday Button for {this.props.firstName}</button>
            </div>
        )
    }
}
export default PersonCard;
