import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    frontShown: true 
  }

  handlePictureChange = () => {
    this.setState({
      frontShown: !this.state.frontShown
    })
  }

  render() {
    const {height, weight, name} = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handlePictureChange}>
            {/* {this.state.frontShown == true ? <img src={this.props.pokemon.sprites.front} alt="oh no!" /> : <img src={this.props.pokemon.sprites.back} alt="oh no!" />} */}
          </div>
          <div className="content">
          <div className="header"> {name} </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {/* {this.props.pokemon.stats[5].value} hp */}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
