import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const anagrams = {entries:
//   { first_word: "wolf",
//     second_word: "flow",
//     count: 1
//   },
//   { first_word: "wolf",
//     second_word: "owl",
//     count: 2
//   }
// };

const anagramList = [
  { firstWord: "wolf",
    secondWord: "flow",
    count: 1
  },
  {
    firstWord: "wolf",
    secondWord: "low",
    count: 22
  }
];

function AnagramPage(){
  return (
  <section className = 'anagrampage'>
    <AnagramCheck/>
    <TopAnagramTitle/>
    {anagramList.map((anagramList) =>{
      const {firstWord, secondWord, count} = anagramList;
      return (
        <TopAnagrams anagramList = {anagramList}/>
      );
    })}
  </section>
  );
}

const AnagramCheck = () =>{
  
  return (
    <div>
      <h1>Anagram Tester</h1>
      <input type = "text" name = "firstanagraminput" id = "" placeholder = "Enter First Word"></input>
      <input type = "text" name = "secondanagraminput" id = "" placeholder = "Enter Second Word"></input>
      <input type = "submit" value = "Submit"/>
    </div>
  )
}

const TopAnagramTitle = () => {
  return (<p>Top Anagram Searches</p>)
}

const TopAnagrams = (props) =>{
  const {firstWord, secondWord, count} = props.anagramList;
  return (
    <div>
      <p>First Word: {firstWord}</p>
      <p>Second Word: {secondWord}</p>
      <p>Count: {count}</p>
    </div>
  )
}
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<AnagramPage/>, document.getElementById('root'));