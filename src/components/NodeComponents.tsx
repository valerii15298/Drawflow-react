import { Grabme, More } from "../svg"

export const Round = (props: any) => {
    return (
        <div className="node-block" >
            {/* {JSON.stringify(props, null, 2)} */}
            dweferf
            ferwf
            ffwer fre f wefr ew fr ewrf ew rfwejrfhiweurfhuifh
        </div>
    )

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