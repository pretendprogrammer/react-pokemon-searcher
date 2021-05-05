import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    showBack: false
  }

  handleCardClick = () => {
    this.setState({showBack: !this.state.showBack})
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleCardClick}>
          <div className="image">
            <img src={this.props.pokemonObject.sprites[this.state.showBack ? 'back' : 'front']} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObject.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonObject.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
