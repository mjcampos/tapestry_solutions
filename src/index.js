import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Redux components
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

var store = createStore(rootReducer);

console.log("store", store.getState());

store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);