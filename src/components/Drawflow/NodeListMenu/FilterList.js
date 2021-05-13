const FilterList = (props) => {
    const { filterObj, editLock, searchWord } = props;
    const searchArr = searchWord.toLowerCase().split(" ").filter(item => item.length > 0);

    const onMouseDownCapture = () => {
        console.log('Mouse down')
    }
    console.log(searchArr)
    return (
        <div
            className="drawflow-node-list-wrap"
        >
            {filterObj.list.map((item, idx) => {
                const label = JSON.stringify(item, null, 2)
                return (
                    (searchArr.find(word => label.toLowerCase().includes(word)) || !searchArr.length) &&
                    <div
                        key={"drawflow-sidemenu-block-" + idx}
                        className="drawflow-node-block"
                        data-draggable={!editLock}
                        onMouseDownCapture={onMouseDownCapture}
                    >
                        {label}
                    </div>
                );
            })}
        </div>
    );
}

export default FilterList;
