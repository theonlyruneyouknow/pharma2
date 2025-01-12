const routes = require('express').Router();

const baseController = require('../controllers');
const secondController = require('../controllers/second');
const myFamilyController = require('../controllers/myFamily');

routes.get('/wife', myFamilyController.getWife);
routes.get('/son', myFamilyController.getSon);
routes.get('/daughter1', myFamilyController.getDaughter1);
routes.get('/daughter2', myFamilyController.getDaughter2);
routes.get('/Age3', myFamilyController.getAge3);

routes.get('/', baseController.getName);
routes.get('/savanna', baseController.getSavanna);
routes.get('/hannah', baseController.getHannah);
routes.get('/Age', baseController.getAge);

routes.get('/savanna2', secondController.getSavanna2);
routes.get('/hannah2', secondController.getHannah2);
routes.get('/Age2', secondController.getAge2);

module.exports = routes;

// const express = require('express');
// const router = express.Router();
// const indexController = require('../controllers/index');

// // Define routes
// router.get('/', indexController.homepage);

// module.exports = router;

// const routes = require('express').Router();

// const baseController = require('../controllers');

// routes.get('/', baseController.getName);

// module.exports = routes;