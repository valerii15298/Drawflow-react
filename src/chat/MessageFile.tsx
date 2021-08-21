import { File, Download } from "./svg-components";

export const MessageFile = ({ src, file }: { src: string; file?: File }) => {
  if (file === undefined) {
    console.error("`file` is not defined, component MessageFile");
  }
  const { name, size, type } = file ?? {};
  return (
    <div className={"MessageFile"}>
      <File className={"fileButton"} />
      <div className={"info"}>
        <div>{name ?? "Unknown name"}</div>
        <div className={"details"}>
          <span>{size ?? "Unknown size"}</span>
          <span>{type ?? "Unknown type"}</span>
        </div>
      </div>
      <a href={src} download>
        <Download className={"downloadButton"} />
      </a>
    </div>
  );
};
