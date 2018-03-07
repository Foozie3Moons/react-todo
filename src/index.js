import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import registerServiceWorker from './registerServiceWorker';

// let toDos = ["Buy ice cream", "Eat ice cream", "Go to the gym"]

ReactDOM.render(<MyList />, document.getElementById('root'));
registerServiceWorker();
