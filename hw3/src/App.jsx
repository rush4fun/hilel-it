import React, { Component } from 'react'
import Table from './components/Table/Table'

export default class App extends Component {

  render() {
    const animals = [
      {type: `turtle`, icon: `🐢`},
      {type: `octopus`, icon: `🐙`},
      {type: `fish`, icon: `🐠`},
      {type: `flamingo`, icon: `🦩`},
      {type: `penguin`, icon: `🐧`}
    ]

    return(
      <>
        <Table tableData={animals} />
      </>
    )
  }
}
