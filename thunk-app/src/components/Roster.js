import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {getRoster} from '../actions/actions';
import PlayerCard from './PlayerCard'

const Roster = ({data, getRoster}) => {
   
    useEffect(()=>{
        getRoster();
    },[])
    
    return(
            <div>
                <div>
                    <button onClick={getRoster}>Click for Data</button>
                </div>
                {/* {data && data.map(player=> (
                    <PlayerCard 
                    key={player.person.id}
                    fullName = {player.person.fullName}
                    position = {player.position.name}
                    role = {player.position.type}
                    number = {player.jerseyNumber}
                    />
                    ))}     */}
            </div>
    )

}
const mapStateToProps = (state) => {
    return{
        data: state.data
    }
}

const mapDispatchToProps = { getRoster };

export default connect(mapStateToProps,mapDispatchToProps)(Roster);