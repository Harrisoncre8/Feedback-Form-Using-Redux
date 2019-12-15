const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Get all feedback
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback" ORDER BY "id";';
  pool.query(queryText).then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting feedback', error);
    res.sendStatus(500);
  });
});

// Adding Feedback to DB
router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log('Adding New Feedback', newFeedback);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understand, newFeedback.support, newFeedback.comment])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log('Error adding new feedback', error);
        res.sendStatus(500);
      });
  });

module.exports = router; 