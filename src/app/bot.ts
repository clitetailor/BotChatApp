import { combineReducers } from 'redux';

export function counter(state = 0, action) {
	switch (action.type) {
		case "INCREASE_COUNTER": {
			return state + action.number;
		}
		default: {
			return 0;
		}
	}
}

export function increaseCounter(number) {
	return {
		type: "INCREASE_COUNTER",
		number: number
	}
}



export function message(state = null, action) {
	switch (action.type) {
		case "RECV_MESSAGE": {
			return action.message;
		}
		default: {
			return null;
		}
	}
}

export function receiveMessage(message) {
	return {
		type: "RECV_MESSAGE",
		message: message
	}
}



export function context(state = null, action) {
	switch (action.type) {
		case "SET_CONTEXT": {
			return action.context;
		}
		default: {
			return state;
		}
	}
}

export function setContext(context) {
	return {
		type: "SET_CONTEXT",
		context: context
	}
}

export let botFunc = combineReducers({ counter, message, context });