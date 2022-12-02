//Step 1: create a constant , assign it a name and set it to an array. 
//Each card in the deck is assigned a unique value so we set the id varianle to 0.
//We then create a variable for the cards and we assign them to an array.
//The array contains all the images that wil be displayed once the cards have been flipped.

const CardDeck = () =>{ 
    let id = 0;
    const cards = [
        'Apple',
        'Burger',
        'Fries',
        'Hotdog',
        'Juice',
        'Milk',
        'Milkshake',
        'Pizza',
        'Sandwhich',
        'Strawberry',


        //After creating the cards array , we all the reduce method. 
        //The reduce method will help us to build up a new object based on each iteration.
        //The first argument of reduce is he accumulation which is the value we build up. 
        //The second is the first image item of what we iterate over.
        //We will then push the new image objects to the accumulator array.
        //We have to push the image objects twice because we want two of the same images so that we can match the 2 cards together eventually
        //After this, we return the accumulator and reduce its dafault value by returning an empty array.
        //The shuffle function is called and we then pass in the cards array.


    ].reduce((acc, item) => {
        acc.push({
            id: id++,
            item,
        });
        acc.push({
            id: id++,
            item,
        });
        return acc;
        
    }, []);
    return shuffle(cards);
};

//In order to not have the cards display in order so we create a shuffle fucntion and set it to an array.
//We create a copy of the array using slice which will copy all of the objects to a new array.
//We take the 10 image objects, duplicate them and put them all inside this new array so we have 20 objects in there instead of 10. We
// We iterate over that array using a for loop. We use the Math.random method to shuffle our deck of cards.
// We then will swap over the values by setting a copy of our array to randCard and then also setting our randCard to temp in order to enable the shuffling of the cards.

const shuffle = (array) => {
    const _array = array.slice(0);
    for (var i = 0; i < _array.length - 1; i++) {
        var randomCard = Math.floor(Math.random() * (i + 1));
        var temp = _array[i];
        _array[i] = _array[randomCard];
        _array[randomCard] = temp;
    }
    return _array;
};

//We export 'CardDeck' component in order to display this code in App.js.
export default CardDeck;

