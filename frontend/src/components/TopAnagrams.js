import React from "react";
import "./TopAnagrams.css";
import Button from "@material-ui/core/Button";
import axios from "axios";

const TopAnagrams = (props) => {
  const anagramSearches = props.anagrams;
  const deleteHandler = (e) => {
    e.preventDefault();
    axios.post("/top").then(
      (response) => {
        console.log(anagramSearches)
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div className="container">
      <h2>Top Anagram Searches*</h2>
      <p>*Searches may not be anagrams!</p>
      <form id="resettable" onSubmit={deleteHandler}>
        <Button variant="contained" color="primary" type="submit">
          Reset
        </Button>
      </form>
      <table className="anagramtable">
        <thead>
          <tr>
            <th>First Word</th>
            <th>Second Word</th>
            <th>Searches</th>
          </tr>
        </thead>
        <tbody>
          {anagramSearches.map((anagramSearches, index) => {
            const firstWord = anagramSearches[0][0];
            const secondWord = anagramSearches[0][1];
            const count = anagramSearches[1];
            return (
              <tr key={index}>
                <td>{firstWord}</td>
                <td>{secondWord}</td>
                <td>{count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TopAnagrams;
