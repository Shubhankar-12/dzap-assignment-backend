# DZap Assignment Backend

This is the backend code for the DZap assignment, a Node.js application using Express for building the server. The backend serves as an intermediary between the DZap frontend and the CoinMarketCap API, providing endpoints to retrieve information about the top cryptocurrencies and perform currency conversion.

## Deployment

The backend is currently live and accessible at [https://dzap-backend-ysim.onrender.com/](https://dzap-backend-ysim.onrender.com/).

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/dzap-assignment-backend.git
   ```

2. Install dependencies:

   ```bash
   cd dzap-assignment-backend
   npm install
   ```

3. Create a `.env` file in the root directory and add your CoinMarketCap API key:

   ```env
   API_KEY=your_coinmarketcap_api_key
   ```

   Make sure to replace `your_coinmarketcap_api_key` with your actual CoinMarketCap API key.

4. Start the server:

   ```bash
   npm start
   ```

   The server will be running on `http://localhost:8800` by default.

## Endpoints

### 1. Get Top Cryptocurrencies

- **Endpoint:** `/api/topCryptos`
- **Method:** `GET`
- **Description:** Retrieves information about the top 100 cryptocurrencies from the CoinMarketCap API.

### 2. Currency Conversion

- **Endpoint:** `/api/convert`
- **Method:** `GET`
- **Query Parameters:**
  - `sourceCrypto`: The ID of the source cryptocurrency.
  - `amount`: The amount to be converted.
  - `targetCurrency`: The currency to convert to.
- **Description:** Converts an amount of a specific cryptocurrency to the equivalent amount in another currency.

## Dependencies

- **dotenv:** Loads environment variables from a `.env` file.
- **express:** Web framework for Node.js.
- **axios:** Promise-based HTTP client for making requests to external APIs.
- **cors:** Middleware to enable Cross-Origin Resource Sharing.

## Notes

- The server logs are displayed in the console, and the server runs on the specified port (default is 8800).

Feel free to explore, modify, and integrate this backend into your DZap assignment frontend. If you encounter any issues or have questions, please refer to the documentation or contact the repository owner. Happy coding!
