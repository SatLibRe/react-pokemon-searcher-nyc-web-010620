import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.props.currentPokemon.name} onChange={this.props.handleFormChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.props.currentPokemon.hp} onChange={this.props.handleFormChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.props.currentPokemon.frontUrl}  onChange={this.props.handleFormChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.props.currentPokemon.backUrl} onChange={this.props.handleFormChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
