import React, { useState } from "react";
import { data } from "../data";

const TopAnagrams = (props) => {
  const [anagramSearches, setAnagramSearches] = useState(data);
  console.log(anagramSearches);
  //   const { firstWord, secondWord, count } = props;
  return (
    <div className="container">
      {/* <p>First Word: {firstWord}</p>
      <p>Second Word: {secondWord}</p>
      <p>Count: {count}</p> */}
      {/* <p>{anagramSearches}</p> */}
      {anagramSearches.map((anagramSearches) => {
        const words = anagramSearches[0];
        const count = anagramSearches[1];
        // console.log(words)
        // console.log(count);
        return (
          <p>{words}{count}</p>
        );
      })}
    </div>
  );
};

export default TopAnagrams;
