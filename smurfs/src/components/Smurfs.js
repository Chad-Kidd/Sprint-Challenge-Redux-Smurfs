import React, { Component } from 'react';
import getSmurfs from '../actions/index'
//  actions with axios calls
import {connect} from 'react-redux' //connec to connect app to redux

// /*
//  to wire this component up you're going to need a few things.
//  I'll let you do this part on your own. 
//  Just remember, `how do I `connect` my components to redux?`
//  `How do I ensure that my component links the state to props?`
//  */
class Smurfs extends Component {
  // constructor() {
  //   super()
  // }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return(
      <div className="Smurfs">
          <h1> WELCOME TO SMURFSVILLE </h1>
      {this.props.smurfs.map((smurfs) => { 
       return( <div>
          <h2>{smurfs.name}</h2>
          <h3>{smurfs.age}</h3>
          <h3>{smurfs.height}</h3>
        </div>)
        }

        )}
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    smurfs: state.smurfs,
   getSmurfs: state.getSmurfs
  }
}

// connect mstp and action with axios call
export default connect(mstp, {getSmurfs})(Smurfs);


// const Smurfs = (props) => {
//   return(
//       <div className='smurfs'>
//       {props.smurfs.map(smurf => (
//           <div>
//               <h1>name: {smurf.name}</h1>
//               <p>age: {smurf.age}</p>
//               <p>height: {smurf.height}</p>
//           </div>
//       ))}
//       </div>
//   )
// }

// export default Smurfs;
