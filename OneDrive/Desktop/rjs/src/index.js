// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// You can customize your application structure here, combining App and Header components.
const RootApp = () => (
  <>
    <App />
  </>
);

ReactDOM.render(<RootApp />, document.getElementById('root'));
