import React from "react";
import "../stylesheets/App.css";
import Form from "./Form";

class App extends React.Component {
  getRecipe = ev => {
    ev.preventDefault();
    const recipeName = ev.target.elements.recipeName.value;
    console.log(ev.target.elements.recipeName.value);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
