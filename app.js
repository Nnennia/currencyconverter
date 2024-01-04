const express = require("express");
const bodyParser = require("body-parser");
const fx = require("money");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

// Define a route for currency conversion
app.post("/convert", (req, res) => {
  try {
    const { number, currentCurrency, convertCurrency } = req.body;

    if (!number || isNaN(number) || !currentCurrency || !convertCurrency) {
      return res.status(400).json({ error: "Invalid request parameters" });
    }

    const convertedAmount = fx(number)
      .from(currentCurrency)
      .to(convertCurrency);
    if (isNaN(convertedAmount)) {
      console.error("Error during currency conversion: result is NaN");
      return res.status(400).json({ error: "Invalid conversion results" });
    }
    res.json({
      result: convertedAmount.toFixed(2),
      targetCurrency: convertCurrency,
    });
  } catch (error) {
    console.error("Error during currency conversion:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
