import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import RouterComponent from "./RouterComponent";
import * as serviceWorker from './serviceWorker';
import {getUsers} from "./store/action";
import storeFactory from "./store/storeFactory";
import './index.css';

 // store code starts here ...
const store =storeFactory({});
const saveState = ()=>{
	window.localStorage["app-store"] = JSON.stringify(store.getState());
	console.log(store.getState())
};
store.dispatch(getUsers());
window.store=store;

store.subscribe(saveState);

ReactDOM.render((
	<Provider store={store}>
		<RouterComponent/>
	</Provider>)
	,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
