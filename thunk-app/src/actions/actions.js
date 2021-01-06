import axios from 'axios'

const headers = {
    Accept: "application/json"
}

export const getRoster = () => (dispatch) => {
    dispatch ({type:"GET_ROSTER_START"})
    axios
        .get("https://statsapi.web.nhl.com/api/v1/teams/54/roster", {headers: headers})
        .then( res => {
            dispatch({type:"GET_ROSTER_SUCCESS", payload: res.data})
            console.log(res)
        })
        .catch(err => {
            dispatch({type:"GET_ROSTER_FAILURE", payload: err})
            console.log(err)
        })


}