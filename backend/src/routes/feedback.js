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

router.delete('/:id', async (req, res) => {
  Feedback.remove({
    feedbackId: req.params.id
  }, function (err, user) {
    if (err)
      return console.error(err);
    res.json({status: true, message: 'feedback deleted successfully'}).send();
  });
});

router.put('/:feedbackId', async (req, res) => {
  Feedback.findOne({feedbackId: req.params.feedbackId})
    .then(feedback => {
      feedback.addedBy = req.body.addedBy;
      feedback.feedback = req.body.feedback;
      feedback.receivedBy = req.body.receivedBy;

      feedback.markModified('addedBy');
      feedback.markModified('feedback');
      feedback.markModified('receivedBy');
      return feedback.save();
    }).then(() => {
    res.json({status: true, message: 'Feedback updated successfully'})
  });
});

module.exports = router;
