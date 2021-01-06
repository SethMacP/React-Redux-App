import React from 'react'
import {Jumbotron} from 'reactstrap'
import {connect} from 'react-redux'

const Spotlight = ({getSpotlight}) => {

    return(
    <>
<Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
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