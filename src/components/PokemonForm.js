import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event, pokemon)=> this.props.handleSubmit(event,this.props.currentPokemon)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.props.currentPokemon.name} onChange={this.props.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
