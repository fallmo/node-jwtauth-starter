const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");

mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to DB")
);

app.use(express.json());

app.use("/api/user", authRoutes);
app.use("/api/protected", protectedRoutes);

app.listen(3000, () => console.log("Server running port 3000"));
