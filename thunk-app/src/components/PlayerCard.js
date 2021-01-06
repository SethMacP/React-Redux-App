import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const PlayerCard = (props) => {
// console.log("props", props)
    return(
        <div className='player'>
            <Card color='warning'>
                <CardBody>
                    {/* Full Name */}
                    <CardTitle tag="h5">{props.fullName}</CardTitle>
                    {/* Position they play */}
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Number: {props.number}</CardSubtitle>
                    {/* Position they play */}
                    <CardText tag="h6" className="mb-2">{props.position}</CardText>
                    {/* Their positions 'role' (F/D/G) */}
                    <CardText>{props.role}</CardText>
                    {/* Link to more details */}
                    <Button> More Info</Button>
                </CardBody>
            </Card>
            
        </div>
    )
}


export default PlayerCard;

