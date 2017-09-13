import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions/index';
import * as types from 'actions/types';

import InputName from 'components/InputName';
import PrintName from 'components/PrintName';

class Hello extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
				<div>
					<InputName onGetName={this.props.onGetName} />
					<PrintName name={this.props.name} />
				</div>
		);
	}
}

let mapStateToProps = (state, props) => {
	return {
		name: state.helloReducer.name,
	};
}

let mapDispatchToProps = (dispatch, props) => {
	return {
		onGetName: (name) => dispatch(actions.onGetName(name)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);