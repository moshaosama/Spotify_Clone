const mongoose = require("mongoose");

const favSongSchema = mongoose.Schema({
  data: Array,
  playList: Object,
});

const favSong = mongoose.model("favSong", favSongSchema);

module.exports = { favSong };
