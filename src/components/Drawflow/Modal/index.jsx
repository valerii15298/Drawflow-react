import ImportModal from "./ImportModal";
import NodeModal from "./NodeModal";
import { MODAL_TYPE } from "../../../common/Enum";

const modalMap = {
    [MODAL_TYPE.import]: ImportModal,
    [MODAL_TYPE.common]: NodeModal,
}

const DrawflowModal = (props) => {
    const { type, close, title, data, setData, event } = props;
    const Component = modalMap[type];
    return (
    <div className="drawflow-modal-container">
        <Component
            title={title}
            close={close}
            data={data}
            setData={setData}
            {...event}
        />
    </div>
    );
}

export default DrawflowModal;
