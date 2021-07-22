import { File, Download } from "./svg-components";

export const MessageFile = ({ src, meta }: { src: string; meta: File }) => {
  const { name, size, type } = meta;
  return (
    <div className={"MessageFile"}>
      <File className={"fileButton"} />
      <div className={"info"}>
        <div>{name}</div>
        <div className={"details"}>
          <span>{size}</span>
          <span>{type}</span>
        </div>
      </div>
      <a href={src} download>
        <Download className={"downloadButton"} />
      </a>
    </div>
  );
};
