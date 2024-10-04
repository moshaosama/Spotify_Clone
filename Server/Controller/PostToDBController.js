const axios = require("axios");
const { Artist } = require("../Model/ArtistModel");
const { Albums } = require("../Model/AlbumModel");
const { BrowseAll } = require("../Model/BrowseAllModel");
let Access_Token;
exports.getAccessToken = async (req, res, next) => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        grant_type: "client_credentials",
      },
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              process.env.Client_Id + ":" + process.env.Client_Secret
            ).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    Access_Token = response.data?.access_token;
    console.log("New Access Token:", Access_Token);
  } catch (err) {
    res.status(500).json({
      statusbare: err.status,
      message: err.message,
    });
  }
  next();
};

exports.postArtistOnDb = async (req, res) => {
  try {
    const artistName = req.params.Song;
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
      {
        headers: {
          Authorization: "Bearer " + Access_Token,
          Accept: "application/json",
        },
      }
    );
    const artist = new Artist({
      data: response?.data?.artists?.items,
    });
    await artist.save();

    res.status(200).json({
      accessToken: Access_Token,
      result: response.length,
      data: response.data,
    });
  } catch (err) {
    res.status(500).json({
      statusbare: err.status,
      message: err.message,
    });
  }
};

exports.postAlbumToDb = async (req, res) => {
  try {
    const IdArtist = req.params.id;
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${IdArtist}/top-tracks?market=EG`,
      {
        headers: {
          Authorization: "Bearer " + Access_Token,
          Accept: "application/json",
        },
      }
    );
    await Albums.deleteMany({});
    const Album = new Albums({
      data: response.data,
    });
    await Album.save();
    res.status(200).json({
      statusbar: "success",
      data: Album,
    });
  } catch (err) {
    res.status(500).json({
      statusbare: err.status,
      message: err.message,
    });
  }
};

exports.postBrowseToDB = async (req, res) => {
  try {
    const accessToken = Access_Token; // Retrieve the access token from res.locals

    if (!accessToken) {
      return res.status(401).json({ message: "Access token is required" });
    }

    const response = await axios.get(
      "https://api.spotify.com/v1/playlists/37i9dQZEVXbLnolsZ8PSNw/tracks",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
          Accept: "application/json",
        },
      }
    );

    res.status(200).json(response.data); // Send the response with a 200 status
  } catch (error) {
    console.error("Error fetching playlist tracks:", error.message);
    res.status(error.response?.status || 500).json({
      message: "Failed to fetch tracks from Spotify",
      error: error.message,
    });
  }
};
