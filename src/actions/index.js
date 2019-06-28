import {GET_STOCKS, CLEAR_HISTORY, DO_NOTHING} from '../utils/constants';
import axios from 'axios';

var url = "http://candidate-services.southcentralus.cloudapp.azure.com/randomQuote/quote?symbols="

export var getStocks = searchVal => (dispatch, getState) => {
	// Start by collecting all symbols of listed stocks
	var duplicate = getState().stocks.map(stock =>stock.symbol.toLowerCase()).includes(searchVal.toLowerCase());

	// If duplicate exists then do nothing
	// Else continue search
	if (!duplicate) {
		var searchURL = url + searchVal;

		axios.get(searchURL)
			.then(res => dispatch({
				type: GET_STOCKS,
				symbol: res.data.quotes[0].symbol,
				price: res.data.quotes[0].lastTradePrice,
				date: res.data.generatedDate
			}))
			.catch(err => {
				console.error(err);

				dispatch({
					type: DO_NOTHING
				});
			});
	} else {
		return {
			type: DO_NOTHING
		}
	}
}

export function clearHistory() {
	return {
		type: CLEAR_HISTORY
	}
}