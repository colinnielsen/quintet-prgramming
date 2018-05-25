import React, { Component } from 'react'
import { Form, Button, Header, Icon, Modal } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
        <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Name' />
        </Form.Group>
        <Form.TextArea label='Tell us a joke!' />
        <Form.Button>Jokes-Away, Motherfucker</Form.Button>
      </Form>
      </Modal>
      
    )
  }
}

export default FormExampleSubcomponentControl