import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/webpack-resolver';

import { IsetWidgetsStyle } from '../../utils/types';

function CssEditor({ setWidgetsStyle }: IsetWidgetsStyle) {
  const [editorValue, setEditorValue] = useState('');

  const handleEditorChange = (value: string) => {
    setEditorValue(value);
    setWidgetsStyle(value);
  };

  return (
    <AceEditor
      mode='css'
      theme='dracula'
      name='css-editor'
      width='100%'
      height='auto'
      placeholder='
      Here is a field to enter your css code!!!'
      onChange={handleEditorChange}
      fontSize={14}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      value={editorValue}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
        splits: 1,
      }}
    />
  );
}

export default CssEditor;
