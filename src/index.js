import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Redux components
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// CSS
import './styles.css';

var store = createStore(rootReducer, applyMiddleware(thunk));

// console.log("store", store.getState());

store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);