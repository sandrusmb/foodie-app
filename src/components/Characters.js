import React from "react";

function Characters(props) {
  return (
    <div>
      {props.characters.map(character => {
        return (
          <div>
            <img src={character.PicUrl} alt={character.Name} />
            <p key={character.Name}>{character.Name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Characters;
