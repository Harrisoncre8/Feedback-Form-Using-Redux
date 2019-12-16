const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all feedback
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

// POST Feedback to DB
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

// DELETE feedback by id
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let queryText = 'DELETE FROM "feedback" WHERE id=$1;';
    pool.query(queryText, [reqId])
      .then((result) => {
        console.log('Feedback deleted');
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error making database query ${queryText}`, error);
        res.sendStatus(500); 
      })
  })

// PUT flagged status in DB
router.put('/flagged/:id', (req, res) => {
  let idToUpdate = req.params.id;
  let flagged = req.body;
  console.log(req.body);
  if (flagged === false) {
    let queryText = `UPDATE "feedback" SET flagged=true WHERE id=$1`;
    pool.query(queryText, [idToUpdate, flagged])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error making database query ${queryText}`, error);
        res.sendStatus(500);
      })
  }
  if (flagged === true) {
    let queryText = `UPDATE "feedback" SET flagged=false WHERE id=$1`;
    pool.query(queryText, [idToUpdate, flagged])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error making database query ${queryText}`, error);
        res.sendStatus(500);
      })
  }
})

module.exports = router; 