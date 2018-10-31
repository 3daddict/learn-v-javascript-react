import React, { Component } from 'react';
import { Container, Box  } from 'bloomer';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
    	<Container>
			<Header />
			<Main />
    	</Container>
    );
  }
}

export default App;
