import React from 'react';
import SingleCard from '../components/SingleCard';
import '../CSS/GameBoard.css';

/* First, we create a constant called GameBoard. We will bring forward the properties used in the Single
Card component so that we can keep track of them by using them as props later on. */
const GameBoard = ({
    disabled,
    dimension,
    cards,
    flipped,
    solved,
    handleClick,
}) => {
    return (
    /* Inside the div, we interate over each single card using the map function. This means that for each 
iteration we give back the values for each single card which will hold its own key, id, item, width, 
height and flipped properties. We will also make sure that for each card, the handleClick property is 
applied which will hold values if the the cards are matched (solved) or if they are not solved (disabled). */
    <div className="GameBoard">
        {cards.map((card) => (
            <SingleCard
                key={card.id}
                id={card.id}
                item={card.item}
                width={dimension / 5.1}
                height={dimension / 5.1}
                flipped={flipped.includes(card.id)}
                solved={solved.includes(card.id)}
                handleClick={handleClick}
                disabled={disabled || solved.includes(card.id)}
                {...card}
            />
        ))}
    </div>
    );
};

/*We export 'GameBoard' component in order to display this code in App.js.*/
export default GameBoard;