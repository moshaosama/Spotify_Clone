const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const { signUpRouter, loginRouter } = require("./Router/AuthRouter");
const { artistRouter, SpotifyRouter } = require("./Router/ArtistRouter");

//Middleware
app.use(express.json());
app.use(cors());
dotenv.config();

//Endpoint
app.use("/login", loginRouter);
app.use("/signUp", signUpRouter);
app.use("/accessToken", SpotifyRouter);
app.use("/Artist", artistRouter);

////////////////////////////////////////////////////////////////
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("DB connection Connect Success");
    app.listen(process.env.PORT, () => {
      console.log("App listening on port " + process.env.PORT);
    });
  })
  .catch(() => {
    console.log("DB connection Failure");
  });
////////////////////////////////////////////////////////////////
