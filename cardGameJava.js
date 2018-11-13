//[A]ce, [J]ack, [Q]ueen, [K]ing
let cardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 0, "J", "Q", "K"];

//[S]pades, [H]earts, [D]iamonds, [C]lubs
let cardSuit = ["S", "H", "D", "C"];
let deck = generateNewDeck();
console.log(deck);






function generateNewDeck()
{
    let deck = [];
    for (var i = 0; i < 52; i++)
    {
        deck.push(generateNewCard(deck));
    }
    return deck;
}

function generateNewCard(deck) {
    let a;
    let b;
    let bool = false;
    do {
        bool = false;
        a = cardNumbers[Math.floor(Math.random() * 13)];
        b = cardSuit[Math.random() * 4];
        if (deck.length != 0)
        {
            for (var i = 0; i < deck.length; i++)
            {
                if ((a + b) === deck[i])
                {
                    bool = true;
                }
            }

        }
    } while (bool === true);
    return (a+b);
}