import React from 'react'
import { anagramList } from "./anagramlist";
import {data} from "./data";
import AnagramCheck from "./components/AnagramCheck";
import TopAnagrams from "./components/TopAnagrams";
import TopAnagramTitle from "./components/TopAnagramTitle";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           testfsda
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="anagrampage">
      <AnagramCheck />
      <TopAnagramTitle />
      {/* {anagramList.map((anagramList) => {
        return <TopAnagrams key={anagramList.id} {...anagramList} />;
      })} */}
      {/* {data.map((data)=>{
        return <TopAnagrams />;
      })} */}
      <TopAnagrams/>
    </div>
  );
}


export default App;
