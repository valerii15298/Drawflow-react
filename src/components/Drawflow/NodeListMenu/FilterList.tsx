import { block } from '../../../types'

type Props = {
    list: Array<block>
    editLock: boolean,
    searchWord: string
}

const FilterList = (props: Props) => {
    const { list, editLock, searchWord } = props;
    const searchArr = searchWord.toLowerCase().split(" ").filter(item => item.length > 0);

    const onMouseDownCapture = () => {
        console.log('Mouse down')
    }
    return (
        <div
            className="drawflow-node-list-wrap"
        >
            {list.map((item, idx) => {
                const { name, type, value } = item
                const label = JSON.stringify(item, null, 2)

                return (
                    (searchArr.find(word => label.toLowerCase().includes(word)) || !searchArr.length) &&
                    <div
                        key={"drawflow-sidemenu-block-" + idx}
                        className="drawflow-node-block"
                        draggable={!editLock}
                        onMouseDownCapture={onMouseDownCapture}
                    >
                        <pre>{`Type: ${type}\nValue: ${value + name}`}</pre>
                    </div>
                );
            })}
        </div>
    );
}

export default FilterList;
