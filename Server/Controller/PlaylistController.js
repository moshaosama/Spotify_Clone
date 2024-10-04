const { PlayList } = require("../Model/playlistModel");
const Multer = require("multer");
const path = require("path");

const Storage = Multer.diskStorage({
  destination: (req, file, cb) => {
    // Use path.join to ensure cross-platform compatibility
    const uploadPath = path.join(__dirname, "../../Client/public"); // Adjust based on your directory structure
    cb(null, uploadPath); // Save to 'public/uploads'
  },
  filename: (req, file, cb) => {
    // Use Date.now() to prevent name collisions
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

exports.uploadImage = Multer({ storage: Storage });

exports.createPlaylist = async (req, res) => {
  const playList = new PlayList({
    Name: req.body.Name,
    Description: req.body.Description,
    Image: req.body.Image,
  });
  if (!req.body) {
    return res.status(500).json({
      status: "404",
      message: "Body Must be Entered",
    });
  }
  await playList.save();
  res.status(200).json({
    statusbar: "success",
    message: "Playlist saved successfully",
  });
};

exports.getPlayList = async (req, res) => {
  const playLists = await PlayList.find();

  res.status(200).json({
    statusbar: "success",
    message: "Playlist found play",
    results: playLists.length,
    data: playLists,
  });
};
