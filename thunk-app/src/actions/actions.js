import axios from 'axios'

const headers = {
    Accept: "application/json"
}

export const GET_ROSTER_START = "GET_ROSTER_START"
export const GET_ROSTER_SUCCESS = "GET_ROSTER_SUCCESS"
export const GET_ROSTER_FAILURE = "GET_ROSTER_FAILURE"
export const GET_SPOTLIGHT_START = "GET_SPOTLIGHT_START"
export const GET_SPOTLIGHT_SUCCESS = "GET_SPOTLIGHT_SUCCESS"
export const GET_SPOTLIGHT_FAILURE = "GET_SPOTLIGHT_FAILURE"



export const getRoster = () => (dispatch) => {
    dispatch ({type:"GET_ROSTER_START"})
    axios
        .get("https://statsapi.web.nhl.com/api/v1/teams/54/roster", {headers: headers})
        .then( res => {
            dispatch({type:"GET_ROSTER_SUCCESS", payload: res.data})
            // console.log(res)
        })
        .catch(err => {
            dispatch({type:"GET_ROSTER_FAILURE", payload: err})
            // console.log(err)
        })
}

export const getSpotlight = (link) => (dispatch)=> {
    console.log("is this working?")
    console.log(link)
    dispatch({type:"GET_SPOTLIGHT_START"})
    axios
        .get(`https://statsapi.web.nhl.com${link}`, {headers:headers})
        .then( res => {
            console.log('this one',res)
            dispatch({type:"GET_SPOTLIGHT_SUCCESS", payload: res.data})
        })
        .catch(err=> {
            console.log(err)
            dispatch({type:"GET_SPOTLIGHT_FAILURE", payload: err})
        })

}