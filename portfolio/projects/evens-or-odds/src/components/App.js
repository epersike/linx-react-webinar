import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startGame, cancelGame } from '../actions/settings';

import Instructions from './Instructions';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

import { fetchNewDeck } from '../actions/deck';
import { fetchStates } from '../reducers/fetchStates';

class App extends Component {

  startGame = () => {
    this.props.startGame();

    this.props.fetchNewDeck();
  }

  render() {
    console.log("this", this)

    if (this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p>Um erro ocorreu, tente recarregar o app.</p>
          <p>{this.props.message}</p>
        </div>
      )
    }
    return (
      <div>
        <h2>♡ ♠ Evens or Odds ♣ ♢</h2>
        {
          this.props.gameStarted ? (
            <div>
              <h3>O jogo começou!</h3>
              <GameState />
              <br />
              <Guess />
              <br />
              <DrawCard />
              <hr />
              <Card />
              <hr />
              <button onClick={this.props.cancelGame}>Cancelar o jogo</button>
            </div>

          ) : (
            <div>
              <h3>Um novo jogo te espera!</h3>
              <br />
              <button onClick={this.startGame}>Começar jogo</button>
            </div>
          )
        }
        <hr />
        <Instructions />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state)

  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state

  //const { gameStarted } = state.settings;
  //const { fetchState, message } = state.deck;

  return { gameStarted, fetchState, message };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()), 
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => dispatch(fetchNewDeck())
//   }
// }

const componenteConnector = connect(
  mapStateToProps, 
  { startGame, cancelGame, fetchNewDeck }
  // mapDispatchToProps
);
export default componenteConnector(App);