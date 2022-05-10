const { Schema, model, Types } = require("mongoose");
const moment = require("moment");
// Create a Reaction Schema to import
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughText: {
      type: String,
      required: true,
      minlength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => moment(createdAt).format("YYYY-MM-DD HH:mm"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
