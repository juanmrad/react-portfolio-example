import MemoryCard from './memory-game/MemoryCard';
import { useState, useEffect } from 'react';

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

let generateDeck = () => {
  const symbols = ["🤮", "😊", "😀", "🙃", "🤔", "😜", "😸", "🧙‍♂️"];
  const deck = [];
  for (let i = 0; i < 16; i++) {
    const card = {
      isFlipped: false,
      symbol: symbols[i % 8]
    }

    deck.push(card);
  }

  return shuffle(shuffle(shuffle(deck)));
}

function MemoryGame() {

  const [deck, setDeck] = useState([]);
  const [pickedCards, setPicked] = useState([]);

  const pickCard = (cardIndex) => {
    if (deck[cardIndex].isFlipped) {
      return;
    }

    let cardToFlip = { ...deck[cardIndex] };
    cardToFlip.isFlipped = true;

    let newPickedCards = pickedCards.concat(cardIndex);
    let newDeck = deck.map((card, index) => {
      if (index === cardIndex) {
        return cardToFlip;
      } else {
        return card;
      }
    });

    if (newPickedCards.length === 2) {
      if (deck[newPickedCards[0]].symbol !== deck[newPickedCards[1]].symbol) {
        let revert1 = { ...deck[newPickedCards[0]] }
        let revert2 = { ...deck[newPickedCards[1]] }
        revert1.isFlipped = false;
        revert2.isFlipped = false;

        newDeck = newDeck.map((card, index) => {
          if (index === newPickedCards[0]) {
            return revert1;
          } else if (index === newPickedCards[1]) {
            return revert2;
          } else {
            return card;
          }
        });

      }
      newPickedCards = [];
    }

    setDeck(newDeck)
    setPicked(newPickedCards)
  }

  useEffect(() => {
    setDeck(generateDeck())
  }, [setDeck])

  const cardsJSX = deck.map((card, index) => {
    return <MemoryCard
      symbol={card.symbol}
      isFlipped={card.isFlipped}
      pickCard={pickCard}
      index={index}
      key={index} />
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <p className="App-subtitle">Match Cards to Win</p>
      </header>

      <div>
        {cardsJSX.slice(0, 4)}
      </div>

      <div>
        {cardsJSX.slice(4, 8)}
      </div>

      <div>
        {cardsJSX.slice(8, 12)}
      </div>

      <div>
        {cardsJSX.slice(12, 16)}
      </div>
    </div>
  );
}

export default MemoryGame;
