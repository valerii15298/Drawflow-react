import { useState } from 'react';
import { Drawflow } from './components/DrawflowHook';
import FilterList from "./components/NodeListMenu/FilterList";
import { useAppDispatch } from './redux/hooks';
import { changeVersion, fetchFlowVersion } from './redux/store';

import './drawflow.scss'

function App() {

  const [searchWord, setSearchWord] = useState("");
  const dispatch = useAppDispatch()

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
      <div className="drawflows">
        <div>
          <button onClick={() => dispatch(fetchFlowVersion())}>Fetch flow version</button>

          <button onClick={() => dispatch(changeVersion(0))}>Version 1</button>
          <button onClick={() => dispatch(changeVersion(1))}>Version 2</button>
          <button onClick={() => dispatch(changeVersion(2))}>Version 3</button>
        </div>
        <Drawflow />
      </div>
    </div>
  )

}

export default App;
