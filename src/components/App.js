import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import StockSearch from './StockSearch';
import StockTable from './StockTable';

class App extends Component {
	render () {
		return (
			<Container>
				<h1 className="text-center">Tapestry Solutions</h1>

				<StockSearch/>
				<StockTable/>
			</Container>
		);
	}
}

export default App;