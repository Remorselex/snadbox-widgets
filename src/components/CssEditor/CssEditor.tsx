import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/worker-css';
import { EventAction, WidgetsStyle } from '../../utils/types';
//import 'ace-builds/webpack-resolver';

interface ICssEditorProps {
  setWidgetsStyle: EventAction<WidgetsStyle>;
}

const CssEditor = ({ setWidgetsStyle }: ICssEditorProps) => {
  const [editorValue, setEditorValue] = useState('');

  const handleEditorChange = (value: string) => {
    setEditorValue(value);
    setWidgetsStyle(value);
  };

  return (
    <>
      <AceEditor
        mode='css'
        theme='dracula'
        name='css-editor'
        width='100%'
        height='100%'
        onChange={handleEditorChange}
        fontSize={14}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={editorValue}
        setOptions={{
          useWorker: false,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
          splits: 1,
          wrap: true,
        }}
      />
    </>
  );
};

export default CssEditor;
