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
        <div>
            {props.newHero.map(hero => (
                <NavLink to={`/hero/${hero.hero_id}`}>
                {hero.name}
                <img src= {hero.image_url}/>
                </NavLink>
            ))}
        </div>
    );

}

export default Heroes