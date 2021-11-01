import JSONEditor, { JSONEditorOptions } from "jsoneditor";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useAppSelector } from "../redux/hooks";

const CodeEditorDiv = styled.div<{ shift?: boolean }>`
  flex: 1;
  max-height: 100vh;
  min-width: 480px;
  ${({ shift }) =>
    shift &&
    css`
      div.ql-toolbar.ql-snow {
        padding-left: 40px;
      }

      .jsoneditor-menu {
        padding-left: 40px;
      }
    `}
`;

type CodeEditorProps = {
  values: any;
  setValues(val: any): any;
};

export const CodeEditor = ({ values, setValues }: CodeEditorProps) => {
  const sidebarVisible = useAppSelector((s) => s.sidebarVisible);
  const ref = useRef<HTMLDivElement>(null);
  const jsonEditorRef = useRef<JSONEditor>();
  useEffect(() => {
    if (ref.current && !jsonEditorRef.current) {
      const options: JSONEditorOptions = {
        mode: "tree",
        modes: ["code", "form", "text", "tree", "view", "preview"],
        onChangeText(text) {
          // console.clear();
          try {
            const parsed = JSON.parse(text);
            // console.log({ parsed });
            // console.log('parsed', parsed.node_attributes.length);
            setValues(parsed);
            // eslint-disable-next-line no-empty
          } catch (e) {
            // console.log({ e });
          }
        },
        onModeChange(mode) {
          if (mode === "code") {
            // @ts-ignore
            jsonEditorRef.current.aceEditor.setOptions({
              maxLines: 10000,
            });
          }
        },
      };
      jsonEditorRef.current = new JSONEditor(ref.current, options);
      // @ts-ignore
      // jsonEditorRef.current.aceEditor.setOptions({
      //   maxLines: 10000,
      // });
    }
    return () => {
      jsonEditorRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (!jsonEditorRef.current) {
      return;
    }
    const currentJson = jsonEditorRef.current.get();
    const stringJson = JSON.stringify(currentJson);
    if (stringJson !== JSON.stringify(values)) {
      jsonEditorRef.current.update(values);
      // jsonEditorRef.current.expandAll();
    }
  }, [values]);

  return <CodeEditorDiv shift={!(sidebarVisible ?? true)} ref={ref} />;
};
