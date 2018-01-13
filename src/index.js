import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Business from './components/Business';

ReactDOM.render(<Business />, document.getElementById('root'));
registerServiceWorker();
