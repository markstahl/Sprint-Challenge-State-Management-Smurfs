import axios from "axios"

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START"
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS"
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE"

export const ADDING_SMURF_START = "ADDING_SMURF_SUCCESS"
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS"
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE"

export const DELETE_SMURF_START = "DELETE_SMURF_SUCCESS"
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS"
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE"

export const getSmurfInfo = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START })
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
            dispatch({
                type: FETCHING_SMURFS_SUCCESS,
                payload: res
            })
        })
        .catch(err => console.log(err))
}

export const addSmurfInfo = (smurf) => dispatch => {
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log(res)
            dispatch({
                type: ADDING_SMURF_SUCCESS,
                payload: res
            })
        })
        .catch(err => console.log(err))

}

export const handleDelete = event => dispatch => {
    console.log(event.target)
    const id = event.target.getAttribute('name')
    dispatch({ type: DELETE_SMURF_SUCCESS });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res)
        dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data})
      })
      .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }));
  };