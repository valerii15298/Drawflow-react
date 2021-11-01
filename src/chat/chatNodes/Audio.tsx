import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { corsUrl } from "../../redux/api";
import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { Pause, Play } from "../svg-components";
import { chatNodeType } from "./chatNodeType";

export const NodeAudio = ({ src }: { src: string }) => {
  src = corsUrl + src;
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [playing, setPlaying] = useState(false);

  const [duration, setDuration] = useState("00:00");

  const play = () => {
    wavesurfer.current?.play();
    setPlaying(true);
  };

  const pause = () => {
    wavesurfer.current?.pause();
    setPlaying(false);
  };

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current as HTMLDivElement,
      barWidth: 1.7,
      barHeight: 1,
      barMinHeight: 1,
      barGap: 1,
      // cursorWidth: 1,
      // backend: 'WebAudio',
      height: 30,
      progressColor: "orange",
      waveColor: "red",
      responsive: true,
      cursorColor: "transparent",
      // barRadius: 3
    });
    wavesurfer.current.load(src);
    console.log(wavesurfer.current.getDuration());

    wavesurfer.current.on("finish", () => {
      setPlaying(false);
    });

    wavesurfer.current.on("audioprocess", () => {
      const seconds = (wavesurfer.current as WaveSurfer).getCurrentTime();
      let duration = new Date(seconds * 1000).toISOString().substr(11, 8);
      if (duration.startsWith("00:")) {
        duration = duration.slice(3);
      }
      setDuration(duration);
    });

    wavesurfer.current.on("ready", () => {
      console.log("WaveSurfer ready!");
      const seconds = (wavesurfer.current as WaveSurfer).getDuration();
      let duration = new Date(seconds * 1000).toISOString().substr(11, 8);
      if (duration.startsWith("00:")) {
        duration = duration.slice(3);
      }
      setDuration(duration);
    });
    return () => wavesurfer.current?.destroy();
  }, [src]);

  return (
    <div className={"messageAudio"}>
      <div className={"playButtonWrapper"}>
        {playing ? (
          <Pause onClick={pause} className={"pauseButton"} />
        ) : (
          <Play onClick={play} className="playButton" />
        )}
      </div>
      <div className={"wavesurfer"} ref={waveformRef} />
      <span className={"audioDuration"}>{duration}</span>
    </div>
  );
};
mapChatNodeTypeToComponent[chatNodeType.Audio] = NodeAudio;
