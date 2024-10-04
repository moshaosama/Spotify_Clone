const { Albums } = require("../Model/AlbumModel");
const { favSong } = require("../Model/favSongModel");
const { PlayList } = require("../Model/playlistModel");

exports.postfavSong = async (req, res) => {
  try {
    const name = req.params.name;
    const id = req.params.id;

    const FavSong = await Albums.findOne({ "data.tracks.name": name });
    const playList = await PlayList.findById(id);

    if (!FavSong) {
      return res.status(404).json({ message: "Song not found" });
    }
    const Track = FavSong.data[0]?.tracks?.find((track) => track.name === name);

    const favouriteSong = new favSong({
      data: Track,
      Result: FavSong.length,
      playList: playList,
    });
    await favouriteSong.save();
    res.json(favouriteSong);
  } catch (error) {
    console.error("Error fetching favorite song:", error);
    res.status(500).json({ message: "Server error" });
  }
};
exports.getFavSongs = async (req, res) => {
  const FavSong = await favSong.find();

  if (FavSong?.length === 0) {
    return res.status(404).json({
      statusbar: "error",
      message: "Song not found",
    });
  }
  res.status(200).json({
    statusbar: "success",
    results: FavSong?.length,
    data: FavSong,
  });
};

exports.getFavSongWithPlayList = async (req, res) => {
  const id = req.params.id;
  const FavSong = await favSong.find({ "playList.id": id });
  await res.status(200).json({
    statusbar: "success",
    results: FavSong?.length,
    data: FavSong,
  });
};
