import React from 'react';
import validator from 'validator';

class InputName extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {message: ""}
	}
	
	onValidate = (event) => {
		var id = event.target.id;
		var value = event.target.value;

		if (id == 'name') {
			if (validator.isEmpty(value)) {
				this.setState({message: "Required"});
			}
			else {
				this.setState({message: ""});
			}
		}
	}
	
	onChange = (event) => {
		var id = event.target.id;
		var value = event.target.value;
		this.props.onGetName(value);	
		this.setState({message: ""});
	}
	
	render() {
		return (
				<div>
					<input type="text" id="name" onChange={this.onChange} onBlur={this.onValidate} />
					<label>{this.state.message}</label>
				</div>
		);
	}
}

export default InputName;