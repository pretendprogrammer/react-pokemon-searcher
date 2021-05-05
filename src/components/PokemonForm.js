import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  handleSubmit = (target) => {
    let newPokemonObject = {
      name: target.name.value,
      hp: target.hp.value,
      sprites: {
        front: target.frontUrl.value,
        back: target.backUrl.value
      }
    }
    this.props.addNewPokemon(newPokemonObject)
    target.reset()
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => {this.handleSubmit(e.target)}}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
