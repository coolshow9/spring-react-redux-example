import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './hello/reducers/index'

import Hello from './hello/containers/Hello'

const logger = createLogger(); 
const store = createStore(rootReducer, applyMiddleware(logger, thunk));


class App extends React.Component {
	render() {
		return (
			<div>
				<Hello />
			</div>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)