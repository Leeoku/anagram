import React from "react";

const TopAnagrams = (props) => {
  const anagramSearches = props.anagrams;
  return (
    <div className="container">
      <h2>Top Anagram Searches</h2>
      <ol>
        {anagramSearches.map((anagramSearches, index) => {
          const firstWord = anagramSearches[0][0];
          const secondWord = anagramSearches[0][1];
          const count = anagramSearches[1];
          return (
            <li key={index}>
              {firstWord} vs {secondWord}, {count}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TopAnagrams;
