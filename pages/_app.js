import App, { Container } from 'next/app';
import Page from '../components/Page';
// could add a redux store to inside this top level component to make it persist across every page 
class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    )
  }
}

export default MyApp;