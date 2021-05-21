import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchNodeTemplates } from '../../redux/store';

type Props = {
    searchWord: string
}

const FilterList = (props: Props) => {
    const { searchWord } = props;
    const list = useAppSelector(s => s.templates)
    const dispatch = useAppDispatch()
    const searchArr = searchWord.toLowerCase().split(" ").filter(item => item.length > 0);
    

    useEffect(() => {
        dispatch(fetchNodeTemplates())
    }, [])

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
