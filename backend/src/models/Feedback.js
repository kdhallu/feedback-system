let {Schema, model} = require('mongoose');

// set up a mongoose model and pass it using module.exports
module.exports = model('Feedback', new Schema({
  id: {
    type: Number
  },
  addedBy:  String,
  receivedBy:  String,
  feedback:  String,
  createdAt: {
    type: Date,
    default: Date.now
  }
}));
