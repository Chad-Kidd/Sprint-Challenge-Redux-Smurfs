import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends Component {
 state = {
      name: '',
      age: '',
      height: ''

    };
  

  handleNewSmurf = (event) => {
      event.preventDefault();
    this.props.addSmurf();

  }

  handleInputChange = e => {
    this.setState
    ({ ...this.state, 
        [e.target.name]: e.target.value });
        // set value/key ALWAYS NEEDED for forms
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleNewSmurf}>
          <input
            onChange={this.handleInputChange}
            value={this.state.name}
            name="name"
            type='text'
            placeholder="name"
          />
          <input
            onChange={this.handleInputChange}
            value={this.state.age}
            name="age"
            type='number'
            placeholder="age"
          />
          <input
            onChange={this.handleInputChange}
            value={this.state.height}
            name="height"
            type='text'
            placeholder="height"
          />
          <button type="submit">ADD SMURF</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    }
}

// connect action 
export default connect(mapStateToProps, {addSmurf})(SmurfForm)