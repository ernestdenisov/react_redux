import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/';

let store = createStore(reducers);
let root = document.getElementById('root');

const rootStyles = {
    width : '400px',
    margin : '10px',
    padding : '10px',
    border : '1px solid black',
    borderRadius : '5px'
}
for (const style in rootStyles) {
    root.style[style] = rootStyles[style];
}

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	root
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
