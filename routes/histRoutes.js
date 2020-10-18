const db = require("../models");
const router = require("express").Router();

router.get('/all', (req, res) => {
    
    db.History.findAll({
      include: {
        model: db.Task,
        attributes: ['description']
      }
    })
      .then(history => res.json(history))

});



module.exports = router;