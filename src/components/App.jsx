import React, { Component } from 'react';
import AppContainer from './App.styled';
import Section from './Section/Section';

class App extends Component {
  state = {};
  render() {
    return (
      <AppContainer>
        <Section title="Please leave your feedback"></Section>
        <Section title="Statistics"></Section>
      </AppContainer>
    );
  }
}

export default App;
