const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
  // external_urls: {
  //   spotify: {
  //     type: String, // Spotify URL is usually essential, so you may want to mark it as required
  //   },
  // },
  // followers: {
  //   href: { type: String, default: null }, // Spotify's followers href is usually null
  //   total: {
  //     type: Number, // Followers count should be a number
  //   },
  // },
  // genres: {
  //   type: [String], // Use array of strings for genres
  // },
  // href: {
  //   type: String,
  //   // Artist API URL
  // },
  // id: {
  //   type: String,
  //   // Artist ID
  //   unique: true, // Enforce unique constraint to avoid duplicates
  // },
  // images: [
  //   {
  //     height: Number, // Should be a number (height of the image)
  //     url: {
  //       type: String, // URL of the image
  //     },
  //     width: Number, // Should be a number (width of the image)
  //   },
  // ],
  // name: {
  //   type: String,
  //   // Artist's name
  // },
  // popularity: {
  //   type: Number, // Popularity score is a number
  // },
  // type: {
  //   type: String, // Usually 'artist'
  // },
  // uri: {
  //   type: String, // Spotify URI
  // },
  data: Array,
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = { Artist };
