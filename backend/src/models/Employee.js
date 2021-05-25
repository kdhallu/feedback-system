let {Schema} = require('mongoose');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const EmployeeSchema = new Schema({
  employeeId: {
    type: Number
  },
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

EmployeeSchema.plugin(AutoIncrement, {inc_field: 'employeeId'});
module.exports = mongoose.model('Employee', EmployeeSchema);
