import React from 'react'
import PokemonPage from './components/PokemonPage'
import './App.css'

class App extends React.Component {

  state = {
    pokemons: [],
    filteredPokemon: [],
    search: "",
    currentPokemon: {
      name: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(response => {
      this.setState({
        pokemons: response, 
        filteredPokemon: response
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      currentPokemon:{
        name: e.target.value
      }
    })
  }

  handleSubmit = (e,pokemon) => {
    e.preventDefault()
    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(pokemon)
    }).then(response => response.json())
    .then(response => {
      this.setState({
        filteredPokemon: [...this.state.filteredPokemon, response]
      })
    })
  }



  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    }, () => {
      this.setState({
        filteredPokemon: this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
      })
    })
  }

  render(){
    return (
    <div className="App">
      <PokemonPage handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleSearch={this.handleSearch}  pokemons={this.state.filteredPokemon} currentPokemon={this.state.currentPokemon}/>
    </div>
    )
  }
}


export default App
