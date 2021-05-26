import { useState } from "react"
import { Grabme, More } from "../../svg"

const Common = (props: object) => {
    const [s, setS] = useState(props)
    return <div className="node-block" >
        {JSON.stringify(s, null, 2)}
    </div>
}

type Props = {
    imgSrc: string,
    setImgSrc: (imgSrc: string) => void,
    name: string,
    description: string
}

const Round = (props: Props) => {
    const { imgSrc, name, description } = props;
    return (
        <div className="blockelem create-flowy">
            <div className="grabme">
                <Grabme />
            </div>
            <div className="blockin">
                <div className="blockico">
                    <span></span>
                    <img src={imgSrc} alt={name + '\n' + description} />
                </div>
                <div className="blocktext">
                    <p className="blocktitle">{name}</p>
                    <div className="side-elem-more">
                        <More />
                    </div>
                    <p className="blockdesc">{description}</p>
                </div>
            </div>
        </div>)
}

const NodeComponent = {
    Common,
    Round,
};

export default NodeComponent
