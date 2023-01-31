require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const app = express();
app.use(cors());
const connectDB = require("./config/db");
const routes = require("./routes");
const { port } = require("./config/keys");
const { blue } = require("./utils/consoleColor");

connectDB();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true,
  })
);

// ROUTES
app.use(routes);

app.use((err, req, res, next) => {
  return res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(
    blue,
    `✓ Listening on Port:${port}. Visit http://localhost:${port}/`
  );
});
