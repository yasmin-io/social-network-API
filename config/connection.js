const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/socialNetwork",
  {
    useNewUrlParser: true,
    // Checking if connection is okay
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
