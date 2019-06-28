import {GET_STOCKS, CLEAR_HISTORY} from '../utils/constants';
import axios from 'axios';

var url = "http://candidate-services.southcentralus.cloudapp.azure.com/randomQuote/quote?symbols="

export var getStocks = searchVal => dispatch => {
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
				type: ""
			});
		});
}

export function clearHistory() {
	return {
		type: CLEAR_HISTORY
	}
}