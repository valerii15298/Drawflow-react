import JSONEditor, { JSONEditorOptions } from "jsoneditor";
import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useAppSelector } from "../redux/hooks";

const CodeEditorDiv = styled.div<{ shift?: boolean }>`
  flex: 1;
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
            console.log({ e });
          }
        },
      };
      jsonEditorRef.current = new JSONEditor(ref.current, options);
    }
    return () => {
      jsonEditorRef.current?.destroy();
    };
  }, []);
  useEffect(() => {
    if (
      jsonEditorRef.current &&
      JSON.stringify(jsonEditorRef.current.get()) !== JSON.stringify(values)
    ) {
      jsonEditorRef.current.update(values);
      // jsonEditorRef.current.expandAll();
    }
  }, [values]);

  return <CodeEditorDiv shift={!(sidebarVisible ?? true)} ref={ref} />;
};
