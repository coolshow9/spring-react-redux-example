import React from 'react';

class PrintName extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
				<div>
					<h2>{this.props.name}</h2>
				</div>
		);
	}
}

export default PrintName;