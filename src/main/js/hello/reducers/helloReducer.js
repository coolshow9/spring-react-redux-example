import * as types from 'actions/types';

const helloReducer = (state = defaultState, action) => {
	switch (action.type) {	
		case types.GET_NAME:
			return {
				name: action.name
			}		
    	default:
    		return state
	}
}

const defaultState = {
	name : ""
}

export default helloReducer;
