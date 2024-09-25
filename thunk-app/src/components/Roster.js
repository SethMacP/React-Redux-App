import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {getRoster} from '../actions/actions';
import PlayerCard from './PlayerCard'
import '../App.css'

const Roster = ({data, getRoster}) => {
   
    useEffect(()=>{
        getRoster();
    },[getRoster])

    console.log("data", data)

    return(
            <>
                
                <div className = 'playerContainer'>
                {data && data.map(player=> (
                    
                    <PlayerCard 
                        key={player.person.id}
                        fullName = {player.person.fullName}
                        position = {player.position.name}
                        role = {player.position.type}
                        number = {player.jerseyNumber}
                        player = {player}
                        data={data}
                        />
                    
                    ))}  
                    </div>  
            </>
    )

}
const mapStateToProps = (state) => {
    return{
        data: state.roster
    }
}

const mapDispatchToProps = { getRoster };

export default connect(mapStateToProps,mapDispatchToProps)(Roster);