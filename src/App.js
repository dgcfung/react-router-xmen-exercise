import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Heroes from './components/Heroes'
import Footer from './components/Footer'
import Profile from './components/Profile'

class App extends React.Component {
  constructor (props){
    super(props)
    this.state={
      characters:[]
    }
  }

  fetchPictures = async () => {
    const response = await axios.get('https://basic-superhero-api.herokuapp.com/superheros')
    const data= response.data
    // console.log(data)
    this.setState({
      characters: data
    })

  }

  componentDidMount(){
    // this.fetchCharacters()
    this.fetchPictures()
  }

  render(){
    console.log(this.state.characters)
  return(
  <div className="App">






      
<main>
<Header/>


<Route
exact path= '/'
component= {
  ()=> <Heroes newHero={this.state.characters}/> 
}

/>

<Route
exact path= '/:id'
component={
  (navProps)=> <Profile navProps={navProps} />
}
  
/>

<Footer/>
</main>


  </div>
  )
  }
}

export default App;
