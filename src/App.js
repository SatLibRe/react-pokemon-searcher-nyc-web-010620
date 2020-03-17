import React from 'react'
import PokemonPage from './components/PokemonPage'
import './App.css'

class App extends React.Component {

  state = {
    pokemons: [],
    filteredPokemon: [],
    search: "",
    currentPokemon: {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
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

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(this.state.currentPokemon)
    }).then(response => response.json())
    .then(response => {
      let copyArr = [...this.state.pokemons, response]
      this.setState({
        pokemons: copyArr
      })
    })
  }

  handleFormChange = (e) => {
    this.setState({
      ...this.state.pokemons,
      currentPokemon: {
        ...this.state.currentPokemon, 
        [e.target.name]: e.target.value
      }
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
      <PokemonPage handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} pokemons={this.state.filteredPokemon} handleFormChange={this.handleFormChange}  currentPokemon={this.state.currentPokemon}/>
    </div>
    )
  }
}


export default App
