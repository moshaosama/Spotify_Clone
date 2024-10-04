const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();

const { signUpRouter, loginRouter } = require("./Router/AuthRouter");
const {
  artistRouter,
  SpotifyRouter,
  albumRouter,
} = require("./Router/ArtistRouter");
const { playListRouter } = require("./Router/playlistRouter");
const { favSongRouter } = require("./Router/favSongRouter");
const { browseAllRouter } = require("./Router/BrowseAllRouter");

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan());
// app.use(express.static(path.join(__dirname, "public")));
dotenv.config();

//Endpoint
app.use("/login", loginRouter);
app.use("/signUp", signUpRouter);
app.use("/accessToken", SpotifyRouter);
app.use("/Artist", artistRouter);
app.use("/Album", albumRouter);
app.use("/playList", playListRouter);
app.use("/favSong", favSongRouter);
app.use("/BrowseAll", browseAllRouter);

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
