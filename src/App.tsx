import { useState, useEffect } from 'react';
import Drawflow from './components/Drawflow/Drawflow';
import FilterList from "./components/Drawflow/NodeListMenu/FilterList";
import mock from "./components/Drawflow/Mock";
import './App.css';

import { block, data } from './types'

function App() {

  const [dataObj, setDataObj] = useState<block[] | null>(null);
  const [canvasData, setCanvasData] = useState<data | null>(null);
  const [editLock, setEditLock] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  //load mock data
  useEffect(() => {
    mock.getFilters(5).then(data => {
      setDataObj(data)
    })

    mock.getDummy().then(data => {
      setCanvasData(data);
    })
  }, []);

  return (
    <div className="App">
      {canvasData && dataObj &&
        <>
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
                list={dataObj}
                editLock={editLock}
              />
            </div>
          </div>
          <Drawflow
            canvasData={canvasData}
            editLock={editLock}
            setEditLock={setEditLock}
          />
        </>}
    </div>
  );
}

export default App;
