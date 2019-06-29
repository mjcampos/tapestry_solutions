import React, {Component} from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getStocks, clearHistory, updateStocks} from '../actions';

class StockSearch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stock: "",
			timerOn: false,
			seconds: 2,
			secondsArr: [2, 5, 10, 30]
		}
	}

	handleUpdate = () => {
		var {stock} = this.state;

		// Validate, then get stocks
		if (stock.trim().length) this.props.getStocks(stock);

		//Clear Input
		this.setState({
			stock: ""
		});
	}

	startCountdown = () => {
		this.setState({
			timerOn: true,
			count: this.state.seconds
		});

		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;

			this.setState({
				count: newCount >= 0 ? newCount : 0
			});

			// When countdown is reached
			if (newCount === -1) {
				this.setState({
					count: this.state.seconds
				});

				// Call update action
				this.props.updateStocks();
			}
		}, 1000);
	}

	stopCountdown = () => {
		this.setState({
			timerOn: false
		});

		clearInterval(this.timer);
		this.timer = undefined;
	}

	render() {
		var {timerOn} = this.state;

		return (
			<div>
				<InputGroup>
					<InputGroup.Prepend>
						<InputGroup.Text>Enter one or more symbols to trace</InputGroup.Text>
					</InputGroup.Prepend>

					<FormControl
						placeholder="ex: GOOG"
						value={this.state.stock}
						onChange={e => this.setState({stock: e.target.value})}
					/>
				</InputGroup>

				<p className="warning">* Warning: Duplicates will be ignored</p>

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
						<Button variant="success" onClick={() => timerOn ? this.stopCountdown() : this.startCountdown()}>{timerOn ? "Stop" : "Start"} Automatic Updates</Button>
					</InputGroup.Append>

					<select value={this.state.seconds} onChange={e => this.setState({seconds: e.target.value})}>
						{this.state.secondsArr.map((second, i) => <option key={i} value={second}>Every {second} Seconds</option>)}
					</select>

					<h3>{timerOn ? `Next update in ${this.state.count.toString()} seconds` : null}</h3>
				</InputGroup>
			</div>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, {getStocks, clearHistory, updateStocks})(StockSearch);