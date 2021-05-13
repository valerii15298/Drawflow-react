const Common = (props) => {
    return <div className="node-block">
        {JSON.stringify(props, null, 2)}
        {/* Node block */}
    </div>
}

export default Common
