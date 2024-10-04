const { Albums } = require("../Model/AlbumModel");

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
