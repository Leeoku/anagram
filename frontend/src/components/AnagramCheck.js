import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/TextField";
import "./AnagramCheck.css";

const AnagramCheck = (props) => {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const [isAnagram, setIsAnagram] = useState("");

  // Handler to perform a "POST" request to Flask and pass in the two words
  const submitHandler = (e) => {
    e.preventDefault();
      axios
        .post("/api/is_anagram", {
          firstWord: firstWord,
          secondWord: secondWord,
        })
        .then(
          (response) => {
            const anagramResult = response["data"];
            setIsAnagram(anagramResult);
            props.afterFormSubmit();
          },
          (error) => {
            console.log(error);
          }
        );
  };

  return (
    <div className="container">
      <h1>Anagram Tester</h1>
      <form id="wordform" onSubmit={submitHandler}>
        <label>
          <Input
            type="text"
            required
            value={firstWord}
            id="wordinput"
            placeholder="Enter First Word"
            onChange={(e) => setFirstWord(e.target.value)}
          />
        </label>
        <label>
          <Input
            type="text"
            required
            value={secondWord}
            id="wordinput"
            placeholder="Enter Second Word"
            onChange={(e) => setSecondWord(e.target.value)}
          ></Input>
        </label>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
      <h3>Result for {firstWord} and {secondWord} : {isAnagram}</h3>
      <h5>Searches are assumed to be actual words</h5>
    </div>
  );
};

export default AnagramCheck;
