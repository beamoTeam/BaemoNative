import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

const url = 'http://127.0.0.1:5500/html/index.html';

class WebviewContainer extends Component {
  render() {
    return (
      <WebView
        source={{uri: url}}
        onMessage={event => {
          alert(event.nativeEvent.data);
        }}
        style={{
          marginTop: '12%',
          marginBottom: '6%',
        }}
      />
    );
  }
}

export default WebviewContainer;
