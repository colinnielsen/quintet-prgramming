import React from 'react'
import { Menu } from 'semantic-ui-react'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: ''
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return(
      <div>
      <header className="App-header" style={{backgroundImage:`url(${'./stripes.png'})`}}>
        <img src='../stupidlaughingemoji.png' style={{height: '120px', width: 'auto'}}/>
        <img src='../stupidlaughingemoji.png' style={{height: '120px', width: 'auto'}}/>
        <img src='../JokeOff.png' style={{height: '150px', width: 'auto'}}/>
        <img src='../stupidlaughingemoji.png' style={{height: '120px', width: 'auto'}}/>
        <img src='../stupidlaughingemoji.png' style={{height: '120px', width: 'auto'}}/>
      </header>
      <Menu compact='true'>
          <Menu.Item
            name='Clean'
            active={activeItem === 'Clean'}
            content='Clean'
            onClick={this.handleItemClick}
            style={{width:'200px', textAlign:'center'}}
          />

          <Menu.Item
            name='Dirty'
            active={activeItem === 'Dirty'}
            content='Dirty'
            onClick={this.handleItemClick}
            style={{width:'200px', textAlign:'center'}}
          />

          <Menu.Item
            name='Dad'
            active={activeItem === 'Dad'}
            content='Dad'
            onClick={this.handleItemClick}
            style={{width:'200px', textAlign:'center'}}
          />
        </Menu>
      </div>
    )
  }
}

export default Header
