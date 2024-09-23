const axios = require("axios");
const { Artist } = require("../Model/ArtistModel");
const { Albums } = require("../Model/AlbumModel");
exports.Access_Token;

exports.getAccessToken = async (req, res, next) => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
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

exports.getArtist = async (req, res) => {
  const artists = await Artist.find();

  if (!artists) {
    return res.status(404).json({
      statusbare: "Not Found",
      message: "Artist not found",
    });
  }
  res.status(200).json({
    statusbare: "OK",
    data: artists,
  });
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

exports.getAlbum = async (req, res) => {
  try {
    const Album = await Albums.find();
    if (!Album) {
      return res.status(404).json({
        statusbare: "error",
        message: "Albums not found",
      });
    }
    res.status(200).json({
      statusbare: "success",
      data: Album,
    });
  } catch (err) {
    res.status(500).json({
      statusbare: err.status,
      message: err.message,
    });
  }
};
