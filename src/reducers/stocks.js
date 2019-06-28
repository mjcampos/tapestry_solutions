import {GET_STOCKS} from '../utils/constants';

function stocks(state = [], action) {
	switch(action.type) {
		case GET_STOCKS:
			state.push({
				symbol: action.symbol,
				price: action.price,
				date: action.date
			});
			return state;
		default:
			return state;
	}
}

export default stocks