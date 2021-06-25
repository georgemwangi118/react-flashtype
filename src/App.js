import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Challenge from './components/ChallengeSection/Challenge'
import Footer from './components/Footer/Footer';

const totalTime = 60;
class App extends Component {
  state = {
    selectedParagraph: "Hello World, I'm George",
    timerStarted: false,
    timeRemaining: totalTime,
    words: 0,
    character: 0,
    wpm: 0,
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <Landing />
        <Challenge 
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          character={this.state.character}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
