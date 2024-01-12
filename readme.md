# Currency Conversion API Documentation

## Base URL

The base URL for the API is `http://localhost:3000`.

## Convert Currency

### Endpoint


### Request

- **Method:** `POST`
- **URL:** `/convert`
- **Content Type:** `application/json`

#### Request Body

| Parameter         | Type     | Description                                   |
|-------------------|----------|-----------------------------------------------|
| `number`          | Number   | The amount to convert.                        |
| `currentCurrency` | String   | The currency code of the amount to convert.   |
| `convertCurrency` | String   | The target currency code for the conversion. |

Example:

```json
{
  "number": 100,
  "currentCurrency": "USD",
  "convertCurrency": "EUR"
}

RESPONSE
    Success Code: 200 OK
    Content Type: application/json

#### Response Body

| Field            | Type     | Description                                |
|------------------|----------|--------------------------------------------|
| `result`         | Number   | The converted amount.                      |
| `targetCurrency` | String   | The currency code of the target currency.  |

Example:

```json
{
  "result": 81.20,
  "targetCurrency": "EUR"
}

