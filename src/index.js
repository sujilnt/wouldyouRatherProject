import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import * as serviceWorker from './serviceWorker';
import storeFactory from "./store/storeFactory";
import RouteContainer from "./RouteContainer";
import './index.css';

 // store code starts here ...
const store =storeFactory({});
const saveState = ()=>{
	window.localStorage["app-store"] = JSON.stringify(store.getState());
	console.log('%c Store Data ', 'background: #222; color: white', store.getState());
};

//store.subscribe(saveState);
//window.store = store;

ReactDOM.render((
			<Provider store={store}>
				<RouteContainer/>
			</Provider>)
	,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
