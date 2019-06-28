import React, {Component} from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

class StockSearch extends Component {
	render() {
		return (
			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Text>Search For Stock</InputGroup.Text>
				</InputGroup.Prepend>

				<FormControl
					placeholder="ex: GOOG"
				/>

				<InputGroup.Append>
					<Button>Button</Button>
				</InputGroup.Append>
			</InputGroup>
		);
	}
}

export default StockSearch;