import React from 'react'
import {NavLink} from 'react-router-dom'

function Heroes(props){
    // fetchCharacters= async()=>{
    //     const response = await Axios.get('')
    //     const data= response.data
    //     this.setState({
    //       xCharacters: data
    //     })
    
    //   }
    return(
        <div className= "hero">
            {props.newHero.map(hero => (
                <NavLink className= 'newHero' to={`/${hero.hero_id}`}>
                <h1>{hero.name}</h1>
                <img className= 'photos' src= {hero.image_url}/>
                </NavLink>
            ))}
        </div>
    );

}

export default Heroes