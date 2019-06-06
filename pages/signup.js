import React, {Component} from 'react';
import Signin from '../components/Signin';
import styled from 'styled-components';
class SignupPage extends Component {
  static async getInitialProps({ req }) {
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

    const apiUrl = `${protocol}://localhost:3000`;
    return { apiUrl };
  }
  constructor(props) {
    super(props);
    // const data = this.props;
  }
  render() {
    const data = this.props;
    return (
      <Columns>
        <Signin data={data} />
        {/* <Signup />
        <Signup /> */}
      </Columns>
    );
  }
};

export default SignupPage;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  height: 100vh;
`;