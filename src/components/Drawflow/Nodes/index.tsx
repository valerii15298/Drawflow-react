const Common = (props: object) => {
    return <div className="node-block" >
        {JSON.stringify(props, null, 2)}
    </div>
}

const Round = () => {
    return <div>
        Round node
    </div>
}

export default {
    Common,
    Round,
};
