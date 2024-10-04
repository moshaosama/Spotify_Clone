const mongoose = require("mongoose");
const Multer = require("multer");

const playListSchema = mongoose.Schema({
  id: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  Name: {
    type: String,
    required: [true, "Please Enter your Name"],
  },
  Description: String,
  Image: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_NDxXhHxBgaC4PJfjW64ktCfb_kJphpfwA&s",
  },
});

const PlayList = mongoose.model("Playlist", playListSchema);
module.exports = { PlayList };
