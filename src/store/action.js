import C from "../constants";
import {
	_getUsers,
	_getQuestions,
	_saveQuestionAnswer,
	_saveQuestion
} from "../data";

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
	return createDispatcher(dispatch,newAction)
};

// get User => Action Creator for to get all the user Information
export const getUsers = () => dispatch => {
	_getUsers().then((data) => dispatch({
			type:C.GET_USERS,
			payload:data
   }));
};

// get Questions => Action Creator for to get all  Questions
export const getQuestions = () => dispatch => {
	return _getQuestions().then((data) => dispatch({
		type:C.GET_QUESTIONS,
		payload: data
	}));
	
};

// currentUser => Action Creator to get the current Login User
export const currentUser = (data = {}) => {
	return {
		type:C.CURRENT_USER,
		payload: data
	};
};
export const currentQuestionAction = (data = {}) => {
	return {
		type: C.SAVE_CURRENT_QUESTION,
		payload: data
	};
};

export const saveQuestionsAnswer = (authUser, id, value) => (dispatch) => {
	const args = {
		authedUser: authUser.id,
		qid: id.id,
		answer: value
	};
	
	_saveQuestionAnswer(args).then((data) => {
		const authid = data.users[ authUser.id ];
		dispatch(currentUser(authid));
		dispatch(getQuestions());
	});
};

export const saveQuestions = (questions) => (dispatch) => {
	_saveQuestion(questions).then((data) => dispatch(
		getQuestions()
	));
};
