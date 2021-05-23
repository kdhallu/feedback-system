let {Schema} = require('mongoose');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const EmployeeSchema = new Schema({
  id: {
    type: Number
  },
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

EmployeeSchema.plugin(AutoIncrement, {inc_field: 'id'});
module.exports = mongoose.model('Employee', EmployeeSchema);
