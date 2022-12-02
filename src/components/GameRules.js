import React from 'react';
import '../CSS/GameRules.css';
// Icons used in the GameRules component have been imported from React Font Awesome.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faGrinWink } from '@fortawesome/free-solid-svg-icons';

/* A constant called Button is created where we will pass name and toggle properties to this button 
below for added functionality. */
const Button = (props) => {
    return (
        <button className="rulesbtn" onClick={props.toggle}>
            {props.name}
        </button>
    );
};

/* We add a state variable "isOpen" in order to identify the open and closed state of the game rules 
button. The toggle method is used to expand or collapse the game rules content by changing the value of 
the isOpen state to its previous state. */
class GameRules extends React.Component {
    constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
}

toggle() {
    this.setState((prevState) => ({
        isOpen: !prevState.isOpen,
    }));
}

/* We will now pass the values in order to display the name and toggle properties of the button.
Each rule stated is assigned a Font Awesome Icon which acts as a bullet point. */
render() {
    return (
        <div className="rules">
        <Button
            name={this.state.isOpen ? 'Hide Game Rules' : 'Show Game Rules'}
            toggle={this.toggle}
        />
        <br />
        {this.state.isOpen && (
            <div className="rulesheading">
            <FontAwesomeIcon
                icon={faGrinWink}
                style={{ color: 'violet', marginRight: 10 }}
            />
            <strong>How To Play:</strong> <br />
            <div className="rulescontent">
            <FontAwesomeIcon
                icon={faAsterisk}
                style={{ color: 'violet', marginRight: 10 }}
            />
                20 Cartoon cards are displayed on the screen facing down. <br />
            <FontAwesomeIcon
                icon={faAsterisk}
                style={{ color: 'violet', marginRight: 10 }}
            />
                You are allowed to flip-over 2 cards at a time. <br />
            <FontAwesomeIcon
                icon={faAsterisk}
                style={{ color: 'violet', marginRight: 10 }}
            />
                If you match 2 cards correctly, the cards will flip facing up
                scoring you 1 point.
            <br />
            <FontAwesomeIcon
                icon={faAsterisk}
                style={{ color: 'violet', marginRight: 10 }}
            />
                If the 2 cards are not a match, it will flip back facing down
                again after a couple of seconds.
            <br />
            <FontAwesomeIcon
                icon={faAsterisk}
                style={{ color: 'violet', marginRight: 10 }}
            />
                You are given 15 chances to match all 10 cartoons. If you match
                all cards correctly under 15 attempts, you will win and earn a
                victory point! If not you lose!
            <br />
            <FontAwesomeIcon
                icon={faAsterisk}
                style={{ color: 'violet', marginRight: 10 }}
            />
                Restart the game if you wish by clicking the restart button or
                clear your scoreboard by refreshing the game.
            <br />
            <FontAwesomeIcon
                icon={faAsterisk}
                style={{ color: 'violet', marginRight: 10 }}
            />
                GOOD LUCK!!!
            <br />
            </div>
        </div>
        )}
    </div>
    );
    }
}

/*We export 'GameRules' to the Navigation component in order to display this code.*/
export default GameRules;