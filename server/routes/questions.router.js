const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  let user = req.user;
  console.log('GET route for Questions!!!')
  
  const sqlText = 
  `SELECT * FROM "questions"
   WHERE user_id= $1;`

  const sqlValue = [user]
  
  pool.query(sqlText, sqlValue)
  .then((result) => {
  res.send(result.rows)
  })
  .catch((err) => {
    console.log('ERROR IN GETTING!!!', err)
    res.sendStatus(500)
  })
  
  
  })

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
