/**
 * Api, structure ...
 * Set flex on flow and place groups, flowSettings components, connect to buttons also, configure groups,
 * flow settings etc...
 * style ...
 */

import { useEffect, useState } from "react";
import styled from "styled-components";
import { setStateAction } from "../redux/actions";
import { request, REQUEST_TYPE } from "../redux/api";
import {
  useAppDispatch,
  useAppSelector,
  useLocalStorage,
} from "../redux/hooks";
import { Close } from "../svg";
import { LocalStorageKey, sideWindow } from "../types";

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
`;
const FlowInfoSettingsSection = styled.section`
  position: relative;
  flex: 0 0 400px;
  overflow-y: auto;
  max-height: calc(100vh + 40px);
  padding-top: 30px;
  border: 1px solid #e8e8ef;
`;

const SettingsLabel = styled.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const BackgroundImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin-top: 10px;
  padding: 10px;

  button {
    background: none;
    border: none;
    outline: none;
  }

  img {
    height: 100px;
    width: 150px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const BackgroundSettingsDiv = styled.div`
  background: #e8e8ef;

  label {
    margin: 10px;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 2px;
    }
  }
`;

export const FlowInfoSettings = () => {
  const flowInfo = useAppSelector((s) => s.flowInfo);
  const dispatch = useAppDispatch();
  const [backgroundImageUrls, setBackgroundImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const resp = await request(REQUEST_TYPE.fetchBackgroundImages, {
        lab_test: 1,
      });
      const { flow_canvas_background_image } = resp;
      const urls = flow_canvas_background_image.map(
        ({ image_link }: { image_link: string }) => image_link
      );
      setBackgroundImageUrls(urls);
    };
    fetchImages().then();
  }, []);

  const { flow_name, flow_description, run_times_max, user_run_limit_seconds } =
    flowInfo || {};
  const [backgroundOpacity, setBackgroundOpacity] = useLocalStorage(
    LocalStorageKey.backgroundOpacity,
    50
  );
  const [backgroundBlur, setBackgroundBlur] = useLocalStorage(
    LocalStorageKey.backgroundBlur,
    50
  );
  const [backgroundImageUrl, setBackgroundImageUrl] = useLocalStorage(
    LocalStorageKey.backgroundImageUrl,
    ""
  );

  const genInput = (
    prop: Record<string, string | number | null | undefined>,
    props: Record<string, unknown>
  ) => {
    const key = Object.keys(prop)[0];
    const value = prop[key];
    return (
      <input
        {...props}
        value={value ?? "Loading ..."}
        onChange={(e) => {
          dispatch(setStateAction({ flowInfo: { [key]: e.target.value } }));
        }}
      />
    );
  };
  return (
    <FlowInfoSettingsSection>
      <CloseButton
        onClick={() =>
          dispatch(
            setStateAction({
              windowConfig: { sideId: sideWindow.none },
            })
          )
        }
      >
        <Close width={19} height={19} />
      </CloseButton>
      <SettingsLabel>
        Flow name:
        {genInput({ flow_name }, { type: "text" })}
      </SettingsLabel>
      <SettingsLabel>
        Flow description:
        {genInput({ flow_description }, { type: "text" })}
      </SettingsLabel>
      <SettingsLabel>
        Max run times:
        {genInput({ run_times_max }, { type: "number" })}
      </SettingsLabel>
      <SettingsLabel>
        User run limit seconds:
        {genInput({ user_run_limit_seconds }, { type: "number" })}
      </SettingsLabel>
      <BackgroundSettingsDiv>
        <label>
          Opacity:
          <input
            type="range"
            value={backgroundOpacity ?? 0}
            min={0}
            max={100}
            onChange={(e) => {
              const opacity = +e.target.value;
              setBackgroundOpacity(opacity);
              dispatch(
                setStateAction({ windowConfig: { background: { opacity } } })
              );
            }}
          />
        </label>
        <label>
          Blur:
          <input
            onChange={(e) => {
              const blur = +e.target.value;
              setBackgroundBlur(blur);
              dispatch(
                setStateAction({ windowConfig: { background: { blur } } })
              );
            }}
            type="range"
            min={0}
            max={100}
            value={backgroundBlur}
          />
        </label>
        <BackgroundImages>
          {backgroundImageUrls.map((url) => (
            <button
              key={url}
              onClick={() => {
                setBackgroundImageUrl(url);
                dispatch(
                  setStateAction({
                    windowConfig: { background: { imageUrl: url } },
                  })
                );
              }}
            >
              <img
                style={{
                  border: backgroundImageUrl === url ? "2px solid blue" : "",
                }}
                src={url}
                alt={"Background image"}
              />
            </button>
          ))}
        </BackgroundImages>
      </BackgroundSettingsDiv>
    </FlowInfoSettingsSection>
  );
};
