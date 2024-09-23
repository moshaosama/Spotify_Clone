const express = require("express");
const SpotifyController = require("../Controller/ArtistController");
const SpotifyRouter = express.Router();
const artistRouter = express.Router();
const albumRouter = express.Router();

SpotifyRouter.route("/").post(SpotifyController.getAccessToken);
SpotifyRouter.route("/Artist/:Song").get(
  SpotifyController.getAccessToken,
  SpotifyController.postArtistOnDb
);

artistRouter.route("/").get(SpotifyController.getArtist);
albumRouter
  .route("/:id")
  .get(SpotifyController.getAccessToken, SpotifyController.postAlbumToDb);

albumRouter.route("/").get(SpotifyController.getAlbum);

module.exports = { SpotifyRouter, artistRouter, albumRouter };
