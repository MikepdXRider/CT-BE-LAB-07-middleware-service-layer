const { Router } = require('express');
// Import ServiceClass


module.export = Router()

  .post('/', (req, res, next) => {
    // calls ServiceClass.post()
    // res.send(response)
    // if previous lines fail, call next(err)
  })

  .get('/', (req, res, next) => {

  })

  .getById('/:id', (req, res, next) => {

  })

  .patch('/:id', (req, res, next) => {

  })

  .delete('/:id', (req, res, next) => {

  });


