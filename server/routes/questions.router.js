const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `
    SELECT * FROM "questions"
    INNER JOIN "user" ON
    questions."user_id" = "user".id
    WHERE user_id= $1;
  `;
  pool.query(queryText)
    .then((result) => {res.send(result.rows); })
    .catch((err) => {
      console.log('Error in GET /api/questions', err);
      res.sendStatus(500);
    });
});


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
