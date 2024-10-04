const mongoose = require("mongoose");

const BroseAllSchema = mongoose.Schema({
  categories: {
    href: String,
    items: Array,
  },
});

const BrowseAll = mongoose.model("BrowseAll", BroseAllSchema);

module.exports = { BrowseAll };
