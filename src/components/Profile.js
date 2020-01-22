import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
// import {useState} from 'react-router-dom'


class Profile extends React.Component{
    
    
    constructor(props){
        super(props)
        this.state={
            newCharacter:{},
        }
    }

    

    fetchInfo = async()=>{
        const heroID = this.props.navProps.match.params.id
    const response= await axios.get(`https://superheroapi.com/api/10220622205561617/${heroID}`)
    const data= response.data
    this.setState({
        newCharacter: data
    })
    }

    componentDidMount(){
        
        // this.fetchCharacters()
        this.fetchInfo()
        console.log(this.props)
      }

    render(){

        if(!this.state.newCharacter.name){
            return (
                <div><p>Loading</p></div>
            )
        }

        console.log(this.state.newCharacter)
        return(
            <div>
        <h1>{this.state.newCharacter.name}</h1>
        <h1>{this.state.newCharacter.id}</h1>
        <h1>{this.state.newCharacter.biography['full-name']}</h1>
        </div>
        )
    }
}

export default Profile