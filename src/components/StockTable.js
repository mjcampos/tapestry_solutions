import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

class StockTable extends Component {
	render() {
		var {stocks} = this.props;

		return(
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
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, null)(StockTable);