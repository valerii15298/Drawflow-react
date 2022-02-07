import { useEffect, useRef } from "react";

import WaveJS from "../../../wave-js/src";
import IWaveOptions from "../../../wave-js/src/core/types/IWaveOptions";

export const WaveJSAudioVisualizer = ({
  audioStream,
}: {
  audioStream: MediaStream;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const generateId = function () {
      return "_" + Math.random().toString(36).substr(2, 9);
    };
    const id = generateId();
    canvasRef.current.id = `audioCanvas${id}`;

    const { deactivate } = WaveJS.fromStream(
      audioStream,
      canvasRef.current.id,
      {
        type: "dualbars blocks",
        colors: ["green", "lightgreen"],
        stroke: 3,
      } as IWaveOptions,
      { connectDestination: false }
    );

    return () => {
      // console.log("deactivate");
      deactivate();
    };
  }, [audioStream]);

  return (
    <div className={"audio"}>
      <canvas className="audioCanvas" ref={canvasRef} />
    </div>
  );
};
