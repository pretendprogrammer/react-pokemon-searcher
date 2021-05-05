import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const URL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemonArray: [],
    filter: ''
  }

  setFilterState = (filterString) => {
    this.setState({filter: filterString})
  }

  addNewPokemon = (newPokemonObject) => {
    const postConfig = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPokemonObject)
    }
    fetch(URL, postConfig)
      .then(res => res.json())
      .then(postedPokemonObject => {
        this.setState({pokemonArray: [...this.state.pokemonArray, postedPokemonObject]})
      })
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(pokemonArray => this.setState({pokemonArray: pokemonArray}))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon} />
        <br />
        <Search handleSetFilter={this.setFilterState} />
        <br />
        <PokemonCollection pokemonArray={this.state.pokemonArray.filter(pokemonObject => pokemonObject.name.includes(this.state.filter))} />
      </Container>
    )
  }
}

export default PokemonPage
