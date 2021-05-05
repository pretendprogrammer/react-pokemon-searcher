import React from 'react'
import PokemonCardFront from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemonArray.map(pokemonObject => <PokemonCardFront key={pokemonObject.id} pokemonObject={pokemonObject} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
