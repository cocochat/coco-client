import React, { Component } from 'react'
import styled from 'styled-components';
class Signup extends Component {
  state = {
    email: '', 
    password: '',
  };
  saveToState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <Form>
        <fieldset>
          <h2>Sign up for an account</h2>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.saveToState}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.saveToState}
            />
          </label>
          <button type="submit">Sign In</button>
        </fieldset>
      </Form>
    );
  }
}
export default Signup;

const Form = styled.form`
  position: relative;
`;
