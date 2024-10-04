const express = require("express");
const browseAllRouter = express.Router();
const postToDbController = require("../Controller/PostToDBController");

browseAllRouter.get(
  "/",
  postToDbController.getAccessToken,
  postToDbController.postBrowseToDB
);

module.exports = { browseAllRouter };
