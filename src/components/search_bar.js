import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}

	render() {
		return (
				<div>
					<input 
					value = {this.state.term}
					onChange={event => this.setState({ term: event.target.value })} />
					<div>Value of the input: {this.state.term || "Use the search box above"}</div>
				</div>
				);	
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
		console.log(event.target.value);
	}
}

export default SearchBar;