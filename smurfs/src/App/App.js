import React, { Component } from 'react';
// import './App.css';
import Smurfs from "../components/Smurfs";
import SmurfForm from '../components/SmurfForm';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Smurfs />
                <SmurfForm />
            </div>
        )
    }
}

export default App;