import React, { useState } from "react";

const NodeModal = (props) => {
  const { title, close, data, setData } = props;
  const [value, setValue] = useState("");
  console.log(data)

  const cancel = () => {
    close();
    if (data.create) {
      props.deleteNode();
    }
  }

  const save = () => {
    const obj = {
      ...data,
      value,
    }
    delete obj.create;
    setData(obj);
    close();
  }

  return (
    <div className="drawflow-modal-content">
      <header className="drawflow-modal-header">
        <strong>{title}</strong>
        <button
          className="drawflow-modal-close"
          onClick={cancel}
        >X</button>
      </header>
      <div>
        Node settings
        <div>
          <input
            type="text"
            defaultValue={data.value ? data.value : ""}
            onKeyDown={e => {
              e.stopPropagation();
            }}
            onChange={e => {
              setValue(e.target.value);
            }}
          />
        </div>
        <button onClick={save}>SAVE</button>
        <button onClick={cancel}>CANCEL</button>
      </div>
    </div>
  );
}

export default NodeModal;
