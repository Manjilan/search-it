import React, {useState} from 'react';
import { Input } from 'antd';
import data from './sentences.json';
import SearchFilter from "./components/SearchFilter";
import 'antd/dist/antd.css';
import './App.css';
const { Search } = Input;

function App() {
  const [matches, setMatches] = useState(data);
  let searchResult = searchField => {
    if(searchField !== ""){
      let sentencesMatchingSearch = data.filter(sentence=> sentence.data.includes(searchField));
      setMatches(sentencesMatchingSearch);
    } else {
      setMatches(data);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Search placeholder="Type your keyword here..." onChange={event => searchResult(event.target.value)}/>
        <SearchFilter matches={matches}/>
      </header>
    </div>
  );
}

export default App;
