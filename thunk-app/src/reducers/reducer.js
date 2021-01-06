const initialState = {
    title: "My API Call Site",
    loading: false,
    error: "",
    roster: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_ROSTER_START":
            return{
                ...state,
                loading: true
            }
        case "GET_ROSTER_SUCCESS":
            return{
                ...state,
                loading: false,
                data: action.payload
            }
        case "GET_ROSTER_FAILURE":
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


