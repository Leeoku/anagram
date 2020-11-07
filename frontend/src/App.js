import React, { useState, useEffect } from "react";
import AnagramCheck from "./components/AnagramCheck";
import TopAnagrams from "./components/TopAnagrams";
import axios from "axios";
import "./App.css";

function App() {
  /* Expected schema from Flask data
  [[["wolf", "flow"], 4], [["on", "no"], 77]]
  */
  useEffect(() => {
    document.title = "Anagram Tester";
  }, []);
  
  const [topAnagrams, setTopAnagrams] = useState([]);
  function processYourResponse(response) {
    const cleanResponse = response["data"];
    return cleanResponse;
  }

  function refreshAnagrams() {
    axios.get("/top").then(
      (response) => {
        const updatedTopAnagrams = processYourResponse(response);
        setTopAnagrams(updatedTopAnagrams);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  return (
    <div className="anagrampage">
      <AnagramCheck afterFormSubmit={() => refreshAnagrams()} />
      <TopAnagrams anagrams={topAnagrams} />
    </div>
  );
}

export default App;
