import React, {Component} from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

class StockSearch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stock: ""
		}
	}

	handleUpdate = () => {
		var {stock} = this.state;

		// Validated that the stock state has value
		if (stock.length) {

		}
	}

	render() {
		return (
			<div>
				<InputGroup>
					<InputGroup.Prepend>
						<InputGroup.Text>Search For Stock</InputGroup.Text>
					</InputGroup.Prepend>

					<FormControl
						placeholder="ex: GOOG"
						value={this.state.stock}
						onChange={e => this.setState({stock: e.target.value})}
					/>

				</InputGroup>

				<InputGroup>
					<InputGroup.Append>
						<Button onClick={() => this.handleUpdate()}>Update Now</Button>
					</InputGroup.Append>

					<InputGroup.Append>
						<Button variant="danger">Clear History</Button>
					</InputGroup.Append>
				</InputGroup>

				<InputGroup>
					<InputGroup.Append>
						<Button variant="success">Start Automatic Updates</Button>
					</InputGroup.Append>

					<select>
						<option value="2">Every 2 Seconds</option>
						<option value="5">Every 5 Seconds</option>
						<option value="10">Every 10 Seconds</option>
						<option value="30">Every 30 Seconds</option>
					</select>
				</InputGroup>
			</div>
		);
	}
}

export default StockSearch;