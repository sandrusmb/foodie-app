import React from "react";

function Form(props) {
  return (
    <div>
      <form onSubmit={props.getRecipe}>
        <input
          type="text"
          placeholder="Write an ingredient"
          name="characterName"
          className="form__input"
        />
        <button className="form__button">Search</button>
      </form>
    </div>
  );
}

export default Form;
