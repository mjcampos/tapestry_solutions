import {GET_STOCKS, CLEAR_HISTORY, DO_NOTHING} from '../utils/constants';

function stocks(state = [], action) {
	switch(action.type) {
		case GET_STOCKS:
			return [
				...state,
				{
					symbol: action.symbol,
					price: action.price,
					date: action.date
				}
			];
		case CLEAR_HISTORY:
			return [];
		case DO_NOTHING:
			return state;
		default:
			return state;
	}
}

export default stocks;