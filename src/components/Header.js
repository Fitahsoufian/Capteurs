import React, { Component } from 'react'
import GetInput from './GetInput'

export default class Header extends Component {


  handleSave = text => {
    this.props.addTodo(text)
  }

  render() {
    return (
      <header className="header">
        <h2>Capteurs</h2>
        <GetInput newTodo
          onSave={this.handleSave} />
      </header>
    )
  }
}
