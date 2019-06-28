import React, {Component} from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getStocks, clearHistory} from '../actions';

class StockSearch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stock: ""
		}
	}

	handleUpdate = () => {
		var {stock} = this.state;

		// Validate stocks
		if (stock.length) {
			this.props.getStocks(stock);

			//Clear Input
			this.setState({
				stock: ""
			});
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
						<Button onClick={() => this.props.clearHistory()} variant="danger">Clear History</Button>
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

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, {getStocks, clearHistory})(StockSearch);