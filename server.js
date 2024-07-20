const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//env configure
dotenv.config();

//rest object
const app = express();
//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/portfolio", require("./routes/protfolio.route"));
//port
const PORT = process.env.PORT || 5005;

//listen
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
