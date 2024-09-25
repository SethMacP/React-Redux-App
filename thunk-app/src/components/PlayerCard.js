import React from 'react'
import { useDispatch} from 'react-redux'
import {
    Card, 
    // CardText, 
    CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {getSpotlight} from '../actions/actions';
// import {connect} from 'react-redux'

const PlayerCard = (props) => {
// console.log("props", props)
const dispatch = useDispatch() 
// console.log({getSpotlight})
    return(
        <div className='player'>
            <Card color='warning'>
                <CardBody>
                    {/* Full Name */}
                    <CardTitle tag="h5">{props.fullName}</CardTitle>
                    {/* Position they play */}
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Number: {props.number}</CardSubtitle>
                    {/* Position they play */}
                    {/* <CardText tag="h6" className="mb-2">{props.position}</CardText> */}
                    {/* Their positions 'role' (F/D/G) */}
                    {/* <CardText>{props.role}</CardText> */}
                    {/* Link to more details */}
                    <Button onClick={()=>dispatch(getSpotlight(props.player.person.link))}> More Info</Button>
                </CardBody>
            </Card>
            
        </div>
    )
}
//Did this based on josh's lecture. Old way was just
// const mapDispatchToProps = {getSpotlight}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         getSpotlight: (link) => dispatch(getSpotlight(link))
//     }}

export default PlayerCard;

