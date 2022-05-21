const { Schema, model, Types } = require("mongoose");
const moment = require("moment");
// Create a Reaction Schema to import
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
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

// This will create the actual model for the schema
// This will take the Schema variable name and the new model name
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
