require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8800;
app.use(cors());

const apiKey = process.env.API_KEY;
app.get('/api/topCryptos', async (req, res) => {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            params: {
                start: 1,
                limit: 100,
                convert: 'USD',
            },
            headers: {
                'X-CMC_PRO_API_KEY': apiKey,
            },
        });
        // console.log(response.data.data);
        res.json(response.data.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/api/convert', async (req, res) => {
    const { sourceCrypto, amount, targetCurrency } = req.query;
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v2/tools/price-conversion', {
            params: {
                amount: amount,
                id: sourceCrypto,
                convert: targetCurrency,
            },
            headers: {
                'X-CMC_PRO_API_KEY': apiKey,
            },
        });
        const convertedAmount = response.data.data.quote[targetCurrency.toLocaleUpperCase()].price;

        res.json({ convertedAmount });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
