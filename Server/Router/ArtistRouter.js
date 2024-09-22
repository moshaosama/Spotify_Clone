const express = require("express");
const SpotifyController = require("../Controller/ArtistController");
const SpotifyRouter = express.Router();
const artistRouter = express.Router();

SpotifyRouter.route("/").post(SpotifyController.getAccessToken);
SpotifyRouter.route("/Artist/:Song").get(
  SpotifyController.getAccessToken,
  SpotifyController.postArtistOnDb
);

artistRouter.route("/").get(SpotifyController.getArtist);

module.exports = { SpotifyRouter, artistRouter };
