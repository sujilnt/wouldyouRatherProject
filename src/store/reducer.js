/*
* List of reudcers
* 1)Get Users
* */
import C from "../constants";
import{combineReducers} from "redux";

// A Reducer for getting all the users
export const getUsers = (state={},action)=> (action.type === C.GET_USERS) ?
	{...action.payload}:
	state;

// A Reducer for getting all the question
export const getQuestions=(state={},action)=>(action.type === C.GET_QUESTIONS) ?
	{...action.payload} :
	state;
// A Reducer for getting current User
export const currentUser=(state={},action)=>(action.type === C.CURRENT_USER) ?
	action.payload:
	state;

export const saveQuestionAndAnswer = (state = {}, action) => (action.type === C.SAVE_QUESTION_ANSWER) ?
	action.payload :
	state;

export const saveQuestions = (state = {}, action) => (action.type === C.SAVE_QUESTIONS) ?
	action.payload :
	state;


// Combining all the reducers using combineReducers
export default combineReducers({
	getUsers,
	getQuestions,
	saveQuestionAndAnswer,
	saveQuestions,
	currentUser
});


