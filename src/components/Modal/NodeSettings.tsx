import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const NodeModal = () => {
  const dispatch = useAppDispatch()
  // const { selectId } = useAppSelector(state => state.drawflowSlice)

  return <div className="drawflow-modal-content">
    NODE_SETTINGS
  </div>

}

export default NodeModal;
