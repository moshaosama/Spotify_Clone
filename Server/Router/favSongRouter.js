const express = require("express");
const favSongController = require("../Controller/FavSongController");
const favSongRouter = express.Router();

favSongRouter.route("/:name/:id").post(favSongController.postfavSong);
favSongRouter.route("/").get(favSongController.getFavSongs);
favSongRouter
  .route("/Playlist/:id")
  .get(favSongController.getFavSongWithPlayList);

module.exports = { favSongRouter };
