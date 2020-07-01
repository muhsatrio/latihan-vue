import stocks from '../../data/stocks';
// import {SET_STOCKS} from '../actions'

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            // eslint-disable-next-line no-console
            console.log(stock);
            stock.prices = Math.round(stock.prices * (1 + Math.random() - 0.5));
        });
    }
}   

const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);
        // commit('SET_STOCKS', order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
}

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
};