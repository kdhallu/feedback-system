let {Schema} = require('mongoose');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const FeedbackSchema = new Schema({
  feedbackId: {
    type: Number
  },
  addedBy:  String,
  receivedBy:  String,
  feedback:  String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

FeedbackSchema.plugin(AutoIncrement, {inc_field: 'feedbackId'});
module.exports = mongoose.model('Feedback', FeedbackSchema);
