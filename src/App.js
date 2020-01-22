import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

class App extends React.Component {
  constructor (){
    this.state={
      characters:[]
    }
  }

  fetchPictures= async()=>{
    const response = await Axios.get('https://basic-superhero-api.herokuapp.com/superheros')
    const callData= res.data
    console.log(data)
    this.setState({
      xPictures: data
    })

  }

  componentDidMount(){
    this.fetchCharacters()
    this.fetchPictures()
  }

  render(){

  return(
<div>
  <App /> 
  <Header/>
  <main></main>
  <Heroes /> 
  <Profile /> 
  <Footer/>
  </div>
  )
  }
}

export default App;
