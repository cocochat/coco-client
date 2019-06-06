import React, { Component } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Router from 'next/router';
import {login} from '../utils/auth';
import {FormButton} from '../styles/FormButton';
/** 
If our request is successful, we'll log in our user by saving the cookie with the token we got from the API, and redirect the user to our profile page.
*/
class Signin extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      email: "",
      password: "", 
      error: ''
    }
    // console.log(props.blah);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveToState = this.saveToState.bind(this);
  }
  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async handleSubmit(event) {
    // If our request is successful, we'll log in our user by saving the cookie with the token we got from the API, and redirect the user to our profile page.
    event.preventDefault();
    const url = `/api/v1/users/login`;
    const email = this.state.email;
    const password = this.state.password;
    axios.post(url, {email, password})
      .then((response) => {
        const {token} = response.data.data;
        // console.log(token);
        login({ token });
        // Router.push('/profile');
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      })
    
  }
  render() {
    const apiUrl = this.props;
    console.log(apiUrl);
    return (
      <PageWrapper>
        <Form onSubmit={this.handleSubmit}>
          <fieldset>
            <h2>Sign in to your account</h2>
            <InputWrapper>
              <label htmlFor="email"> Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.saveToState}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.saveToState}
              />
            </InputWrapper>
            <FormButton type="submit">Sign In</FormButton>
            <p className={`error ${this.state.error && "show"}`}>
              {this.state.error && `Error: ${this.state.error}`}
            </p>
          </fieldset>
        </Form>
      </PageWrapper>
    );
  }
}
export default Signin;

const Form = styled.form`
  position: relative;
  flex: 1 0 auto;
  max-width: 30%;
  .error {
    margin: 0.5rem 0 0;
    display: none;
    color: brown;
  }
  .error.show {
    display: block;
  }
  input {
    display: block;
    width: 100%;
    min-height: 50px;
    padding: 15px;
    color: #292f36;
    background: #ececec;
    font-family: "Gotham";
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 18px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
  }
`;

const PageWrapper = styled.div`
  background-image: url('../static/images/blue-wave-bg-svg.svg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

`;


const InputWrapper = styled.div`
  display: block;
  margin-bottom: 30px;

  label {
    font-size: 11px;
    letter-spacing: 1px;
    line-height: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};
  }
`;