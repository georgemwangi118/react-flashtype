import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Challenge from './components/ChallengeSection/Challenge'
import Footer from './components/Footer/Footer';
import { SAMPLE_PARAGRAPHS } from './data/sampleParagraphs';

const totalTime = 60;

const serviceUrl = 'http://metaphorpsum.com/paragraphs/1/10';

const DefaultState = {
  selectedParagraph: "",
  timerStarted: false,
  timeRemaining: totalTime,
  words: 0,
  character: 0,
  wpm: 0,
  testInfo: [],
}
class App extends Component {
  state = DefaultState;

  fetchNewParagraphFallback = () => {
    const data = SAMPLE_PARAGRAPHS[
      Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
    ];

    const selectedParagraphArray = data.split();
    const testInfo = selectedParagraphArray.map(selectedLetter => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    this.setState({ ...DefaultState,testInfo, selectedParagraph: data });

  }

  fetchNewParagraph = () => {
    fetch(serviceUrl)
      .then(response => response.text())
      .then((data) => {
        this.setState({ selectedParagraph: data });

        const selectedParagraphArray = data.split();
        const testInfo = selectedParagraphArray.map(selectedLetter => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });

        this.setState({ ...DefaultState,testInfo, selectedParagraph: data });
      });
  }

  componentDidMount() {
    this.fetchNewParagraphFallback();
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {

        //change the wpm
        const timeSpent = totalTime - this.state.timeRemaining;
        const wpm = 
          timeSpent > 0 ? (this.state.words / timeSpent) * totalTime : 0;
        this.setState({
          timeRemaining: this.state.timerStarted - 1,
          wpm: parseInt(wpm),
        });

        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
        })
      } else {
        clearInterval(timer);
      }
    }, 1000)
  };

  startAgain = () => this.fetchNewParagraphFallback();

  handleUserInput = (inputValue) => {
    if(!this.state.timerStarted) this.startTimer();

    //The Algorithm for underflow
    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if(index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted"
          },
          ...this.state.testInfo.slice(1)
        ],
        characters,
        words
      });

      return;
    }
    //algorithm for overflow
    if(index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }

    //make a copy of testInfo
    const testInfo = this.state.testInfo;
    //handle backspace
    if (!(index === this.state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = "notAttempted";
    };

    //check for the correct typed letters
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    //update the testInfo
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    //update state
    this.setState({
      testInfo,
      words,
      characters,
    })
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
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
