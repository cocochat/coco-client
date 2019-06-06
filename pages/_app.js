import App, { Container } from 'next/app';
import nextCookie from 'next-cookies';
import Page from '../components/Page';
import UserContext from '../components/UserContext';
// could add a redux store to inside this top level component to make it persist across every page 
class MyApp extends App {
  state = {
    loggedIn: null
  }
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const { token } = nextCookie(ctx);

    return { pageProps, token };

  }
  
  componentDidMount = () => {
    const user = this.props.token;
    if (user) {
      this.setState({
        loggedIn: true
      });
    } else {
      this.setState({
        loggedIn: false
      })
    }
  };
  render() {
    // const { Component } = this.props;
    const { Component, pageProps } = this.props;
    console.log(this.state.loggedIn);
    return (
      <Container>
        <Container>
          <UserContext.Provider
            value={{
              loggedIn: this.state.loggedIn
              
            }}
          >
            <Page>
              <Component {...pageProps} />
            </Page>
          </UserContext.Provider>
        </Container>
      </Container>
    );
  }
}

export default MyApp;