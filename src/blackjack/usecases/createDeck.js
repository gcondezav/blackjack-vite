import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tipos ['C','D','H','S']
 * @param {Array<String>} especiales ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo Deck de cartas
 */
// Esta función crea un nuevo deck
export const crearDeck = ( tipos, especiales ) => {
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}