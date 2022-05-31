import React from 'react';
import {WebView} from 'react-native-webview';

const url = 'http://127.0.0.1:5500/html/index.html';

const WebviewContainer = ({handleSetRef}) => {
  const run = `
    document.body.style.backgroundColor = 'blue';
    true;
  `;
  return (
    <WebView
      ref={handleSetRef}
      onMessage={event => {}}
      injectedJavaScript={run}
      source={{uri: url}}
      style={{
        marginTop: '12%',
        marginBottom: '6%',
      }}
    />
  );
};

export default WebviewContainer;
