type Props = {
    importJson: (...rest: any) => any,
    exportJson: (...rest: any) => any,
    clear: (...rest: any) => any,
    editLock: boolean,
    setEditorMode: (editLock: boolean) => any,
}

const DrawflowAdditionalArea = (props: Props) => {
    const { importJson, exportJson, clear, editLock, setEditorMode } = props;

    const changeMode = () => {
        setEditorMode(!editLock);
    }

    return (
        <div className="drawflow-additional">
            {!editLock &&
                <>
                    <button className="drawflow-additional-button" onClick={importJson}>Import</button>
                    <button className="drawflow-additional-button" onClick={exportJson}>Export</button>
                    <button className="drawflow-additional-button" onClick={clear}>Clear</button>
                </>
            }
            <button className="drawflow-additional-button" onClick={changeMode}>{editLock ? "UnLock" : "Lock"}</button>
        </div>
    );
}

export default DrawflowAdditionalArea;
