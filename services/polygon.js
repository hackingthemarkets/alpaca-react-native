import apisauce from 'apisauce'
import config from '../config'

const polygonApi = (baseURL = config.POLYGON_URL) => {
    
    const api = apisauce.create({
        baseURL: config.POLYGON_URL,
        timeout: 5000
    })

    const params = {
        apiKey: config.ALPACA_API_KEY_ID
    }

    // GET	//{ticker}

    const getQuote = (symbol) => api.get(`v2/snapshot/locale/us/markets/stocks/tickers/${symbol}`, params)

    return {
        getQuote
    }
}

export default polygonApi


