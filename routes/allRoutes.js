const db = require("../models");
const router = require("express").Router();

router.get('/all', (req, res) => {
    
    db.Task.findAll()
      .then(tasks => res.json(tasks))

});


module.exports = router;