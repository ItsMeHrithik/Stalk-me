const express = require('express');
const router = express.Router();

// @route GET api/users/test
//@desc Tests users route
//@access Public
router.get('/test', (req, res) => {
    res.json({message : "Stalk User"})
})

router.post("/adduser", (req, res) => {
    const dbCard = req.body;
  
    StalkProfile.create(dbCard, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  });

module.exports = router;