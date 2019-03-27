import React, { Component } from 'react'
import Nav from './Nav';
import Meta from './Meta';
export default class Page extends Component {
  render() {
    return (
      <div>
        <Meta/>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}
