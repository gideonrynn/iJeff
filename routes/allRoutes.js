const db = require("../models");
const router = require("express").Router();

router.get('/all', (req, res) => {
    
    db.Task.findAll({})
      .then(tasks => res.json(tasks))

});

router.get('/statusnull', (req, res) => {
    
  db.Task.findAll({
    where: {
      status: '',
      status: null
    }
  })
    .then(tasks => res.json(tasks))

});


router.put("/:id", (req, res) => {
  
  let id = req.params.id
  console.log(id)
  console.log(req.body)
  db.Task.update(req.body,
    {where: 
      {id: id}
    })
      .then(update => {
        res.json(update);

        db.History.create({
            TaskId: id
          })
      })

})



module.exports = router;