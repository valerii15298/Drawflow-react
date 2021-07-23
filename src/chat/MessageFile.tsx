import { File, Download } from "./svg-components";

export const MessageFile = ({ src, meta }: { src: string; meta?: File }) => {
  if (meta === undefined) {
    console.error("`meta` is not defined, component MessageFile");
  }
  const { name, size, type } = meta ?? {};
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
