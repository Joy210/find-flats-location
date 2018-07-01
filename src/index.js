import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './components/hello';
import registerServiceWorker from './registerServiceWorker';

// const root = <div>
//     <Hello firstName='S. Rahman' lastName='JoY5' />
//     <Hello firstName='S. Rahman' lastName='JoY5' />
// </div>

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
