/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADDING_SMURFS = "ADDING_SMURFS";
export const ADDED_SMURF ="ADDED_SMURF";
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

 // change from func to const
  export const getSmurfs = () => dispatch => {
    // dispatch / THUNK
    dispatch({ type: FETCHING_SMURFS })
  //  axios call
   axios.get(`http://localhost:3333/smurfs`)
   .then(response => {
    //  dispatch
    dispatch({ type: SUCCESS, payload: response.data})
   })
  // error
   .catch(error => {
    dispatch({ type: FAILURE, payload: error})
    });
  }

  
  export const addSmurf= (newSmurf) => dispatch => {
    dispatch({ type: ADDING_SMURFS })
     //  axios call
   axios.get(`http://localhost:3333/smurfs`, newSmurf)
   .then(response => {
    //  dispatch
    dispatch({ type: ADDED_SMURF, payload: response.data})
   })
  }

 