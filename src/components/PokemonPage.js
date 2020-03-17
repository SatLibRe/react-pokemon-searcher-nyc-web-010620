import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleFormChange={this.props.handleFormChange} handleSubmit={this.props.handleSubmit} currentPokemon={this.props.currentPokemon}/>
        <br />
        <Search onChange={this.props.handleSearch} />
        <br />
        <PokemonCollection pokemons={this.props.pokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
