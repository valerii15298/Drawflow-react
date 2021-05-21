import { useState, useEffect } from 'react';
import { Drawflow } from './components/DrawflowHook';
import FilterList from "./components/NodeListMenu/FilterList";
import './drawflow.scss'

function App() {

  const [searchWord, setSearchWord] = useState("");

  return (
    <div className="App">
      <div className="drawflow-node-list">
        <div className="drawflow-node-list-search">
          <input
            type="text"
            placeholder="Search templates"
            onChange={e => { setSearchWord(e.target.value) }}
          />
        </div>
        <div className="drawflow-node-list-flex">
          <FilterList
            searchWord={searchWord}
          />
        </div>
      </div>
      <Drawflow />
    </div>
  )

}

export default App;
