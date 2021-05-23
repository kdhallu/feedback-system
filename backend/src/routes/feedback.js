const express = require('express');
const router = express.Router();
const db = require('../helpers/db-connector');
const Feedback = db.Feedback;

router.post('/', async (req, res) => {
  const feedback = new Feedback(req.body);
  try {
    await feedback.save();
    res.json({status: true, message: 'entry added successfully'})
  } catch (e) {
    console.log(e)
  }
});

router.get('/', async (req, res) => {
  Feedback.find({}, function(err, feedback) {
    res.send({
      data: feedback
    });
  });
});


module.exports = router;
