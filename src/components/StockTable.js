import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class StockTable extends Component {
	render() {
		return(
			<Table>
				<thead>
					<tr>
						<th>Symbol</th>
						<th>Price</th>
						<th>Price Date (GMT)</th>
					</tr>
				</thead>
			</Table>
		);
	}
}

export default StockTable;