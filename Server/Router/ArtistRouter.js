const express = require("express");
const SpotifyController = require("../Controller/PostToDBController");
const artistController = require("../Controller/ArtistController");
const albunController = require("../Controller/AlbumController");
const SpotifyRouter = express.Router();
const artistRouter = express.Router();
const albumRouter = express.Router();

SpotifyRouter.route("/").post(SpotifyController.getAccessToken);
SpotifyRouter.route("/Artist/:Song").get(
  SpotifyController.getAccessToken,
  SpotifyController.postArtistOnDb
);

artistRouter.route("/").get(artistController.getArtist);
albumRouter
  .route("/:id")
  .get(SpotifyController.getAccessToken, SpotifyController.postAlbumToDb);

albumRouter.route("/").get(albunController.getAlbum);

module.exports = { SpotifyRouter, artistRouter, albumRouter };
