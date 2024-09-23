const mongoose = require("mongoose");

const AlbumSchema = mongoose.Schema({
  data: Array,
});

const Albums = mongoose.model("Albums", AlbumSchema);

module.exports = { Albums };
