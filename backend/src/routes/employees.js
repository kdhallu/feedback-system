const express = require('express');
const router = express.Router();
const db = require('../helpers/db-connector');
const Employee = db.Employee;

const staticData = [{
  name: 'ketan Dhallu',
  createdAt: new Date()
}, {
  name: 'Bill clinton',
  createdAt: new Date()
}, {
  name: 'George Bush',
  createdAt: new Date()
}, {
  name: 'donald trump',
  createdAt: new Date()
}];

router.get('/createDummyUsers', (req, res) => {
  const promisesArray = []
  staticData.map(({id, name, createdAt}) => {
    const employee = new Employee({id, name, createdAt});
    promisesArray.push(employee.save())
  })

  Promise.all(promisesArray).then((values) => {
    res.json({status: true, message: 'users Created'})
  });
});

router.get('/', (req, res) => {
  Employee.find({}, function(err, feedback) {
    res.send(feedback);
  });
});

router.post('/', async (req, res) => {
  const employee = new Employee(req.body);
  try {
    await employee.save();
    res.json({status: true, message: 'Employee created successfully'})
  } catch (e) {
    console.log(e)
  }
});

router.delete('/:employeeId', async (req, res) => {
  Employee.remove({
    employeeId: req.params.employeeId
  }, function (err, user) {
    if (err)
      return console.error(err);
    res.json({status: true, message: 'user delete successfully'}).send();
  });
});

router.put('/:employeeId', async (req, res) => {
  Employee.findOne({employeeId: req.params.employeeId})
    .then(employee => {
      employee.name = req.body.name;
      employee.markModified('name');
      return employee.save();
    }).then(() => {
    res.json({status: true, message: 'user updated successfully'})
  });
});

module.exports = router;
