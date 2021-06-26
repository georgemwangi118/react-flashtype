import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Challenge from './components/ChallengeSection/Challenge'
import Footer from './components/Footer/Footer';
import { SAMPLE_PARAGRAPHS } from './data/sampleParagraphs';

const totalTime = 120;

const DefaultState = {
  selectedParagraph: "",
  timerStarted: false,
  timeRemaining: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};
class App extends Component {
  state = DefaultState;

  fetchNewParagraphFallback = () => {
    const data = SAMPLE_PARAGRAPHS[
      Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
    ];

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    //Update the testInfo in state
    this.setState({ 
      ...DefaultState,
      testInfo, 
      selectedParagraph: data, 
    });

  };

  fetchNewParagraph = () => {
    fetch("http://metaphorpsum.com/paragraphs/1/9")
      .then(response => response.text())
      .then((data) => {
        // Once the api results are here, break the selectedParagraph into test info

        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });

        //Update the testInfo in state
        this.setState({ 
          ...DefaultState,
          testInfo, 
          selectedParagraph: data, 
        });
      });
  };

  componentDidMount() {
    //As soon as the component mounts, load the selected paragraph from the API
    this.fetchNewParagraphFallback();
  }

  startAgain = () => this.fetchNewParagraphFallback();

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {

        //change the wpm and time remaining
        const timeSpent = totalTime - this.state.timeRemaining;
        const wpm = 
          timeSpent > 0 ? (this.state.words / timeSpent) * totalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };


  handleUserInput = (inputValue) => {
    if(!this.state.timerStarted) this.startTimer();

    /**
      * 1. Handle the underflow case - all characters should be shown as not-attempted
      * 2. Handle the overflow case - early exit
      * 3. Handle the backspace case
      *      - Mark the [index+1] element as notAttempted
      *        (irrespective of whether the index is less than zero)
      *      - But, don't forget to check for the overflow here
      *        (index + 1 -> out of bound, when index === length-1)
      * 4. Update the status in test info
      *      1. Find out the last character in the inputValue and it's index
      *      2. Check if the character at same index in testInfo (state) matches
      *      3. Yes -> Correct
      *         No  -> Incorrect (Mistake++)
      * 5. Irrespective of the case, characters, words and wpm can be updated
      */

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
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
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
    });
  };

  render() {
    return (
      <div className="app">
        <Nav />
        <Landing />
        <Challenge 
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
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
