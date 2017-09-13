import * as types from './types';
import axios from 'axios';

export function onGetName(name) {
	return {
		type: types.GET_NAME, 
		name
	}
}