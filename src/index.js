import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {createStore} from 'redux';
// import {createStore,applyMiddleware,compose} from 'redux';
// import thunk from 'redux-thunk';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// const store = createStore(reducer,
//     compose(applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
   const store = createStore(reducer);
ReactDOM.render(<Provider store = {store}>
    <App/>
    </Provider>
    ,document.getElementById('root'));
// registerServiceWorker();
