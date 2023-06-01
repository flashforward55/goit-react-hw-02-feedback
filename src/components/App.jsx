import React, { Component } from 'react';
import AppContainer from './App.styled';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <AppContainer>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </Section>
      </AppContainer>
    );
  }
}

export default App;
