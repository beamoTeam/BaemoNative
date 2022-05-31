import React, {useRef} from 'react';
import WebviewContainer from './components/MyWebView';

const App = () => {
  // 웹뷰와 rn과의 소통은 아래의 ref 값을 이용하여 이루어집니다.
  let webviewRef = useRef();

  const handleSetRef = _ref => {
    webviewRef = _ref;
  };
  /** 웹뷰 ref */
  // const handleSetRef = _ref => {
  //   webviewRef = _ref;
  // };

  return (
    <WebviewContainer webviewRef={webviewRef} handleSetRef={handleSetRef} />
  );
};

export default App;
