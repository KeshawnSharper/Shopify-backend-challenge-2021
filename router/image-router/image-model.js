const mongoose = require("mongoose");

const ImagesShema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  user_id: {
    type:Number,
    required: true
  },
  id:{
    type:Number,
  }
});

module.exports = mongoose.model("images", ImagesShema);
