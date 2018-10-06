import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'

import './index.css';
import { Pages } from './pages';

const App = () => (
  <div className="app">
    <Pages />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
