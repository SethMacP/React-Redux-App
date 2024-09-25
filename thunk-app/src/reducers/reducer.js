import {GET_ROSTER_START,GET_ROSTER_SUCCESS,GET_ROSTER_FAILURE,GET_SPOTLIGHT_START, GET_SPOTLIGHT_SUCCESS, GET_SPOTLIGHT_FAILURE} from '../actions/actions'

const initialState = {
    title: "My API Call Site",
    rosterLoading: false,
    playerLoading: false,
    error: "",
    roster: [],
    spotlight: {
        "copyright" : "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2021. All Rights Reserved.",
        "people" : [ {
          "id" : 8470594,
          "fullName" : "Marc-Andre Fleury",
          "link" : "/api/v1/people/8470594",
          "firstName" : "Marc-Andre",
          "lastName" : "Fleury",
          "primaryNumber" : "29",
          "birthDate" : "1984-11-28",
          "currentAge" : 36,
          "birthCity" : "Sorel",
          "birthStateProvince" : "QC",
          "birthCountry" : "CAN",
          "nationality" : "CAN",
          "height" : "6' 2\"",
          "weight" : 185,
          "active" : true,
          "alternateCaptain" : false,
          "captain" : false,
          "rookie" : false,
          "shootsCatches" : "L",
          "rosterStatus" : "Y",
          "currentTeam" : {
            "id" : 54,
            "name" : "Vegas Golden Knights",
            "link" : "/api/v1/teams/54"
          },
          "primaryPosition" : {
            "code" : "G",
            "name" : "Goalie",
            "type" : "Goalie",
            "abbreviation" : "G"
          }
        } ]
      }
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ROSTER_START:
            return{
                ...state,
                rosterLoading: true
            }
        case GET_ROSTER_SUCCESS:
            return{
                ...state,
                rosterLoading: false,
                roster: action.payload.roster
            }
        case GET_ROSTER_FAILURE:
            return{
                ...state,
                rosterLoading: false,
                error: action.payload
            }
        case GET_SPOTLIGHT_START:
            return{...state,
                playerLoading: true
            }
        case GET_SPOTLIGHT_SUCCESS:
            return{
                ...state,
                playerLoading: false,
                spotlight: action.payload
            }
        case GET_SPOTLIGHT_FAILURE:
            return{
                ...state,
                playerLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}


