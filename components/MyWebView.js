import React, {Component} from 'react';
// import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{uri: 'http://localhost:3000/'}}
        style={{
          marginTop: '12%',
          marginBottom: '6%',
        }}
      />
    );
  }
}

// const styles = StyleSheet.create({
//   margin: {
//     marginTop: 400,
//     marginLeft: 200,
//   },
//   border: {
//     borderWidth: 1,
//     borderColor: 'black',
//   },
// });

export default MyWeb;
