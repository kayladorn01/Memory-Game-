import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import Navigation from './components/Navigation';
import CardDeck from './components/CardDeck';

/* Within our App component, we will begin by creating some states to store our cards and 
their functions in for this memory game. The states of the inital values will be set to an empty array
since the values will always be changing except for the dimension of the card and when a card is set to
be disabled. Additionally, the score, victories, wrong guesses and defeats will act as a count and always
will begin at 0 when the game begins. We use the useState hook to declare our variables. 
This will help to preserve our values when different functions are called.*/
const App = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [victories, setVictories] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [defeats, setDefeats] = useState(0);

  /* In order to run some functions throughout this game, we will use the useEffect hook.
  This hook will run after every render and after each time an update is made when the player interacts
  with the game. In this instance, an empty array is set for resizing the game board since we will
  only be running this function once after the initial rendering. */
  useEffect(() => {
    resizeGameBoard();
    setCards(CardDeck());
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeGameBoard);
    return () => window.removeEventListener('resize', resizeListener);
  });

  useEffect(() => {}, [score]);

  /* We use the handleClick function to target the id of the elements. 
  From this, we will then set the state of the cards to setDisabled to true which will allow us
  to click the card just once. If the setDisabled function of the card is set to false we will be 
  able to click on the card. Also when the same matching card is clicked, this will mean that we have 
  solved the matching pair and the scores will in turn be updated. If there is no match, then the score 
  will remain as was and the cards will flip back. */
  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
        updateScore(score, checkScore);
      } else {
        noMatch();
      }
    }
  };

  /* If the card pair is not a match,  the front image will only be showed for 1 second and will 
  thereafter be reset once again. At the same time, the updateGuesses function will also be updated.*/
  const noMatch = () => {
    updateGuesses(wrongGuesses, checkGuesses);
    setTimeout(resetCards, 1000);
  };

  /* Each time the player matches the pair of cards correctly, their scores will increase by 1.*/
  function updateScore(score, callback) {
    var newScore = score + 1;
    setScore(score + 1);
    callback(newScore);
  }

  /* Each time the player matches the pair of cards incorrectly, their wrong guesses will increase by 1.*/
  function updateGuesses(wrongGuesses, callback) {
    var newGuesses = wrongGuesses + 1;
    setWrongGuesses(wrongGuesses + 1);
    callback(newGuesses);
  }

  /* The checkScore function will keep track of the players scores. Once the player matches all 10 Avenger
  cards correctly, he/she will be alerted that they have won the game and will thereafter score 1 
  victory point. The game will then be reset after 2 seconds. */
  const checkScore = (score) => {
    if (score > 9) {
      setVictories(victories + 1);
      alert('Avengers Assemble! We got ourselves a winner! Congratulations!');
      setTimeout(newGame, 3000);
    }
  };

  /* The checkGuesses function will keep track of the players incorrect guesses. The player is given
 15 chances to match all 10 Avenger cards correctly, if he/she fails to do so then they will be alerted
 that they have lost the game. The game will then be reset after 2 seconds. */
  const checkGuesses = (wrongGuesses) => {
    if (wrongGuesses > 14) {
      setDefeats(defeats + 1);
      alert('Oops! You Lost! Is That The Best You Can Do? Try Again!');
      setTimeout(newGame, 2000);
    }
  };

  /* The NewGame function will allow the user to restart the game from scratch thereby reseting 
  the solved, cards, wrong guesses and score states to their initial values. */
  const newGame = () => {
    setSolved([]);
    setCards(CardDeck());
    setWrongGuesses(0);
    setScore(0);
  };

  /* The resetCards function sets flipped and disabled states to their initial values.*/
  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = (id) => flipped.includes(id);

  /* Here we will see if the flippedCard item is equal to the clickCard item based on the id of
  each card which is selected.*/
  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.item === clickedCard.item;
  };

  /* The viewable width and length of the gameboard will set according to specific dimensions of the 
  document where the game will run. */
  const resizeGameBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  /* For the last part, we will render the Navigation and GameBoard components using props which hold and
  return the values of the card functions which we have coded above. */
  return (
    <div className="app">
      <Navigation
        victories={victories}
        defeats={defeats}
        score={score}
        wrongGuesses={wrongGuesses}
        newGame={newGame}
      />
      <GameBoard
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
    </div>
  );
};

/* The App class here has been exported to display the Navigation, GameBoard
and CardDeck components. This is done when the App.js file is imported and used in Index.js.*/
export default App;
