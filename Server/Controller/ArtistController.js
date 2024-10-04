const { Artist } = require("../Model/ArtistModel");

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
