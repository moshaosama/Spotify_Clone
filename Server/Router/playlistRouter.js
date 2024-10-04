const express = require("express");
const playListRouter = express.Router();
const playListController = require("../Controller/PlaylistController");
const userController = require("../Controller/AuthController");

playListRouter
  .route("/")
  .post(
    userController.Protect,
    playListController.uploadImage.single("Image"),
    playListController.createPlaylist
  )
  .get(playListController.getPlayList);

module.exports = { playListRouter };
