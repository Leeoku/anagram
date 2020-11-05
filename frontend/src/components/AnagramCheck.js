import React, { useState } from "react";
import axios from "axios";

const AnagramCheck = (props) => {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");

  // Handler to perform a "POST" request to Flask and pass in the two words
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/", {
        firstWord: firstWord,
        secondWord: secondWord,
      })
      .then(
        (response) => {
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

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const AnagramCheck = props => {
//   const [firstWord, setFirstWord] = useState("");
//   const [secondWord, setSecondWord] = useState("");
//   const submitHandler = e => {
//     e.preventDefault();
//     console.log(firstWord, secondWord);
//     axios
//       .post("/", {
//         firstWord: firstWord,
//         secondWord: secondWord
//       })
//       .then(
//         response => {
//           console.log(response);
//           props.afterFormSubmit();
//         },
//         error => {
//           console.log(error);
//         }
//       );
//   };

//   /**
//    *Your API:
//    * Request: {firstWord, secondWord}
//    * Respond: {}
//    */

//   return (
//     <div className="container">
//       <h1>Anagram Tester</h1>

//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           value={firstWord}
//           name="firstword"
//           placeholder="Enter First Word"
//           onChange={e => setFirstWord(e.target.value)}
//         ></input>
//         <input
//           type="text"
//           value={secondWord}
//           name="secondword"
//           placeholder="Enter Second Word"
//           onChange={e => setSecondWord(e.target.value)}
//         ></input>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// };

// export default AnagramCheck;
