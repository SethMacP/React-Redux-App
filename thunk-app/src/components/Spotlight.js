import React from 'react'
import {Jumbotron} from 'reactstrap'
import {connect} from 'react-redux'
import '../App.css'

const Spotlight = ({spotlightPlayer, getSpotlight}) => {
console.log("spotlightPlayer", spotlightPlayer)
    return(
    <>
        <Jumbotron>
            <h1 className="display-2">{spotlightPlayer.people[0].fullName}</h1>
            <p className="lead">{spotlightPlayer.people[0].captain === true ? "[Captain]" : ("")}</p>
            <p className="lead">{spotlightPlayer.people[0].alternateCaptain === true ? "[Alternate Captain]" : ("")}</p>
            <h3 className="display-5">{spotlightPlayer.people[0].currentTeam.name} </h3>
            <hr className="my-2" />
            <div className="spotlightContainer">
                <div className ="personalDetails">
                    <p>{spotlightPlayer.people[0].birthCountry}:  {spotlightPlayer.people[0].birthCity}, {spotlightPlayer.people[0].birthStateProvince}</p>
                    <p className="lead">Birthday: {spotlightPlayer.people[0].birthDate}</p>
                    <p className="lead">Age: {spotlightPlayer.people[0].currentAge}</p>
                    <p className="lead">Height: {spotlightPlayer.people[0].height}</p>
                    <p className="lead">Weight: {spotlightPlayer.people[0].weight}</p>
                </div>
                <div className = "numberDetails">
                    <p className="lead">Number: {spotlightPlayer.people[0].primaryNumber}</p>
                    <p className="lead">Height: {spotlightPlayer.people[0].height}</p>
                    <p className="lead">Weight: {spotlightPlayer.people[0].weight}</p>
                </div>
                <div className ="teamDetails">

                </div>
            </div>
            
        </Jumbotron>
    </>
    )
}

const mapStateToProps = (state) => {
    return{
        spotlightPlayer: state.spotlight
    }
}


export default connect(mapStateToProps)(Spotlight);


// spotlight.people.
// fullName
// currentTeam.name
// currentAge
// height
// weight
// primaryNumber
// birthCity
// birthStateProvince
// birthCountry
// birthDate
// [ternary] captain
// [ternary] alternateCaptain
// primaryPosition.name


