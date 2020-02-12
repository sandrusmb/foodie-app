import React from "react";

function Form(props) {
  return (
    <div>
      <form onSubmit={props.getRecipe}>
        <input
          type="text"
          placeholder="Write an ingredient"
          name="recipeName"
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Form;
