import React from 'react';
import '../CSS/Navigation.css';
import GameRules from '../components/GameRules';

/* Here we will create the Navigation component where we will pass props to hold the values for the
number of victories, defeats, scores and wrong guesses the player makes. We also render the GameRules
component in order to display its content within this Navigation component. */
const Navigation = (props) => (
    <nav className="navigation">
        <div>
            <ul className="navigation-nav">
                <h1 className="heading">Cartoon Memory Game</h1>
                <button className="restart-btn" onClick={() => props.newGame()}>
                Restart Game
                </button>
        <GameRules />
        <li className="nav-item">
            <h3 className="victories">Victories: {props.victories} </h3>
            <h3 className="defeats">Defeats: {props.defeats} </h3>
            <h3 className="score">Score: {props.score}/10</h3>
            <h3 className="wrongGuesses">
            Wrong Guesses: {props.wrongGuesses}/15
            </h3>
        </li>
        </ul>
    </div>
    </nav>
);

/*We export 'Navigation' component in order to display this code in App.js.*/
export default Navigation;