import React, { useState } from "react";
import "./styles.css";
import headerImage from "../src/undraw_finish_line_katerina_limpitsouni_xy20 (1).svg";
var sportsemojiDictionary = {
  "⚽️": "Football",
  "🏀": "basketball",
  "🏈": "Rugby",
  "🎾": "tennis",
  "🎱": "Pool",
  "🏇": "horse race",
  "🏊": "Swimming",
  "🚣": "Canoe",
  "🎳": " bowling",
  "🎲": "Ludo"
};

var emojisWeKnow = Object.keys(sportsemojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = sportsemojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = (
        <div className="errormessage">
          "Opps.....we dont have this in our database"
        </div>
      );
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = sportsemojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <div>
        <img className="responsive-image" src={headerImage} />
      </div>

      <input className="input" onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h3>
        {" "}
        Guess the sport from the sports equipment below and click to check if
        you are correct
      </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
