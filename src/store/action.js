import C from "../constants";
import {
	_getUsers,
	_getQuestions
} from "../data";

const stateConstants = {
	getQuestions: "getQuestions",
	getUsers: "getUsers"
};

/*
*  createDispatcher =>
*  A helper redux thunk function , that basically takes dispatcher and object .
*  dispatch -> store.dispatch (similar to)
*  {type,payload } -> action
*/

const createDispatcher = (dispatch,action)=>{
	return dispatch(action);
};

/*
	localStorageState(dispatch,type,{}) =>
	A helper function to dispatch an action from local storage .
	@params
	dispatch => dispatcher () ,
	type -> type of state
	action -> an object {type,payload}
 */

const localStorageState = (dispatch,type, action)=>{
	const newAction = {...action, payload: action.payload[type]};
	console.log("newAction",newAction);
	return createDispatcher(dispatch,newAction)
};

// get User => Action Creator for to get all the user Information
export const getUsers=() => dispatch =>{
	localStorage["app-store"] ?
		localStorageState(dispatch,stateConstants.getUsers,{
			type:C.GET_USERS,
			payload:JSON.parse(localStorage["app-store"])
		}) :
		_getUsers().then((data) => createDispatcher(dispatch,{
	   type:C.GET_USERS,
	   payload:data
   }));
};

// get Questions => Action Creator for to get all  Questions
export const getQuestions = () => dispatch =>{
	localStorage["app-store"] ?
		localStorageState(dispatch,stateConstants.getQuestions,{
			type:C.GET_QUESTIONS,
			payload:JSON.parse(localStorage["app-store"])
		}) :
	_getQuestions().then((data) => createDispatcher(dispatch,{
		type:C.GET_QUESTIONS,
		payload: data
	}));
};



