import React from "react";
import "../stylesheets/App.css";
import Form from "./Form";
import Characters from "./Characters";

class App extends React.Component {
  state = {
    characters: []
  };

  getRecipe = async ev => {
    ev.preventDefault();
    const characterName = ev.target.elements.characterName.value;
    console.log(ev.target.elements.characterName.value);
    const api_call = await fetch(
      `https://futuramaapi.herokuapp.com/api/v2/characters?search=${characterName}`
    );
    const data = await api_call.json();
    console.log(data[0].Planet);

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].Name);
    }

    this.setState({
      characters: data
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Futurama</h1>
        </header>
        <Form getRecipe={this.getRecipe} />

        <Characters characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
