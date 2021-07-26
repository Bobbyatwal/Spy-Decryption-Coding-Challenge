import React from "react";
import { useState } from "react";
import "./MainComponent.css";

function MainComponent() {
  const [text, SetText] = useState("");

  let counter = {};
  let uniqueCharacter = [];
  let frequentChars = "";

  function countData() {
    //Manipulate input data into array of single characters
    const data = text.split("");
    /* Loop through data. If character exists in counter object, 
update pointer by 1 otherwise assign counter value to 1 */
    for (let i = 0; i < data.length; i++) {
      let letter = data[i].toLowerCase();
      // Filters out numbers and whitespace using REGEX
      if (!/\d+/.test(letter) && /^\S+/.test(letter)) {
        if (counter[letter] === undefined) {
          counter[letter] = 1;
          //Push only the new (unique) characters into a new array
          uniqueCharacter.push(letter);
        } else {
          counter[letter] = counter[letter] + 1;
        }
      }
    }
  }
  // Create new array for most frequent characters and store in frequentChars
  function fiveFrequentChars() {
    frequentChars = Object.keys(counter)
      .sort((a, b) => counter[b] - counter[a])
      .slice(0, 5);
  }

  countData();
  fiveFrequentChars();

  return (
    <div>
      <title>Insert title here</title>{" "}
      <input
        type="text"
        placeholder="Please enter your text here..."
        onChange={(event) => {
          SetText(event.target.value);
        }}
      />
      <div className="row">
        <table
          className="table table-bordered table-hover"
          style={{ width: "20%", marginLeft: "auto", marginRight: "auto" }}
        >
          <thead>
            <tr>
              <th> Character </th>
              <th> Count </th>
            </tr>
          </thead>
          <tbody>
            {uniqueCharacter.map((char, index) => {
              return (
                <tr key={index}>
                  {frequentChars.includes(char) && frequentChars.length === 5 ? (
                    <td style={{ background: "silver" }}> {char} </td>
                  ) : (
                    <td> {char} </td>
                  )}
                  <td>{counter[char]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainComponent;
