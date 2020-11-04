import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

// function AnagramPage(){
//   return (
//   <section className = 'anagrampage'>
//     <AnagramCheck/>
//     <TopAnagramTitle/>
//     {anagramList.map((anagramList) =>{
//       return (
//         <TopAnagrams key = {anagramList.id} {...anagramList}/>
//       );
//     })}
//   </section>
//   );
// }

// ReactDOM.render(<AnagramPage/>, document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

