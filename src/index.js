import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/app';

import serviceWorker from './service-worker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker();
