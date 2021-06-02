import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { dragTemplate, fetchNodeTemplates } from '../redux/store';

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
    }, [dispatch])

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
                        onMouseDownCapture={(e) => {
                            dispatch(dragTemplate(1))
                        }}
                    >
                        <pre>{`Type: ${type}\nValue: ${value + name}`}</pre>
                    </div>
                );
            })}
        </div>
    );
}

export default FilterList;
