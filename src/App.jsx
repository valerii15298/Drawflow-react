import { useState, useEffect } from 'react';
import Drawflow from './components/Drawflow/Drawflow';
import FilterList from "./components/Drawflow/NodeListMenu/FilterList";
import mock from "./components/Drawflow/Mock";
import './App.css';

function App() {
  // TODO change logic

  //* original data list
  const [dataObj, setDataObj] = useState(null);
  const [canvasData, setCanvasData] = useState(null);
  const [editLock, setEditLock] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    mock.getFilters(5).then(data => {
      console.log('filters', data)
      setDataObj(data)
    })

    mock.getDummy().then(data => {
      console.log('dummy', data)
      setCanvasData(data);
    })
  }, []);

  const isIncludeAndSearch = (target) => {
    const arr = searchWord.toLowerCase().split(" ").filter(item => item.length > 0);
    return arr.filter(word => target.toLowerCase().includes(word)).length === arr.length;
  }

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
                filterObj={dataObj}
                editLock={editLock}
                isIncludeAndSearch={isIncludeAndSearch}
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
