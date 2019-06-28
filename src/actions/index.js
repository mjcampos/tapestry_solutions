import {GET_STOCKS, CLEAR_HISTORY, DO_NOTHING} from '../utils/constants';
import axios from 'axios';

var url = "http://candidate-services.southcentralus.cloudapp.azure.com/randomQuote/quote?"

export var getStocks = searchVal => (dispatch, getState) => {
	// Start by collecting all symbols of listed stocks
	var duplicate = getState().stocks.map(stock =>stock.symbol.toLowerCase()).includes(searchVal.toLowerCase());

	// If duplicate exists then do nothing
	// Else continue search
	if (!duplicate) {
		axios.get(url, {
			params: {
				symbols: searchVal
			}
		}).then(res => {
			var quotes = [];

			for(var i = 0; i < res.data.quotes.length; i++) {
				quotes.push({
					symbol: res.data.quotes[i].symbol,
					price: res.data.quotes[i].lastTradePrice,
					date: res.data.generatedDate
				});
			}

			dispatch({
				type: GET_STOCKS,
				quotes
			})
		})
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

export var updateStocks = () => (dispatch, getState) => {
	// Get all symbols
	// var symbols = getState().stocks.map(stock => stock.symbol);

	// if (symbols.length) {
	// 	for(var i = 0; i < symbols.length; i++) {
	// 		searchURL = url 
	// 	}
	// }
}

export function clearHistory() {
	return {
		type: CLEAR_HISTORY
	}
}