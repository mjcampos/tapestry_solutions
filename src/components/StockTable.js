import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

class StockTable extends Component {
	getMostRecentDate = () => new Date(Math.max.apply(null, this.props.stocks.map(stock => new Date(stock.date))));

	render() {
		var {stocks} = this.props;

		return(
			<div>
				<h2>Quote Information</h2>

				{this.props.stocks.length ? <p>The data is as current as {this.getMostRecentDate().toUTCString()}</p> : null}
				
				<Table>
					<thead>
						<tr>
							<th>Symbol</th>
							<th>Price</th>
							<th>Price Date (GMT)</th>
						</tr>
					</thead>

					<tbody>
						{stocks.map((stock, i) => (
								<tr key={i}>
									<td>{stock.symbol}</td>
									<td>{stock.price}</td>
									<td>{stock.date}</td>
								</tr>
							))}
					</tbody>
				</Table>
			</div>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, null)(StockTable);