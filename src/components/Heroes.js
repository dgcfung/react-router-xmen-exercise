import React from 'react'
import {NavLink} from 'react-router-dom'

function Heroes(props){
    fetchCharacters= async()=>{
        const response = await Axios.get('')
        const data= response.data
        this.setState({
          xCharacters: data
        })
    
      }
    return(

    )

}

export default Heroes