import React, { useState, useEffect } from "react";
import axios from "axios";
const AnagramCheck = () => {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstWord, secondWord);
    axios.post('/', {
      firstWord: firstWord,
      secondWord: secondWord
    })
    .then((response) =>{
      console.log(response);
    }, (error) => {
      console.log(error);
    })
  };
  return (
    <div className="container">
      <h1>Anagram Tester</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={firstWord}
          name="firstword"
          placeholder="Enter First Word"
          onChange={(e) => setFirstWord(e.target.value)}
        ></input>
        <input
          type="text"
          value={secondWord}
          name="secondword"
          placeholder="Enter Second Word"
          onChange={(e) => setSecondWord(e.target.value)}
        ></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AnagramCheck;
