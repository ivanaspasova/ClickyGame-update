import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Tile from "./components/Tile";

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: "You've guessed correctly",
    tiles: [
      { id: 0, val: "a" },
      { id: 1, val: "b" },
      { id: 2, val: "c" },
      { id: 3, val: "d" },
      { id: 4, val: "e" }
    ]
  };
  handleTileClick = id => {
    console.log(`You've clicked  ${id}`);

    this.state.tiles.forEach(tile => {
      if (tile.id === id) {
        if (tile.checked === true) {
          console.log("You've clicked the same tile twice");
        } else {
          tile.checked = true;
        }
      }
    });
  };
  render() {
    return (
      <div className="container">
        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <div className="game-board">
          {this.state.tiles.map(tile, i)}=>
          <Tile
            key={i}
            id={tile.id}
            handleTileClick={this.handleTileClick}
            char={tile.val}
          />
          )}
        </div>
      </div>
    );
  }
}
export default App;
