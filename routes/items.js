const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/items');

router.post('/', itemsController.createItems);
router.get('/', itemsController.getAllItems);
router.get('/:id', itemsController.getSingleItems);
router.put('/:id', itemsController.updateItems);
router.delete('/:id', itemsController.deleteItems);

// router.post('/', itemsController.createItems);
// router.get('/', itemsController.getAllItems);
// router.get('/:id', itemsController.getSingleItems);
// router.put('/:id', itemsController.updateItems);
// router.delete('/:id', itemsController.deleteItems);

router.post('/', itemsController.createItemCategory);
router.get('/', itemsController.getAllItemCategories);
router.get('/:id', itemsController.getSingleItemCategory);
router.put('/:id', itemsController.updateItemCategory);
router.delete('/:id', itemsController.deleteItemCategory);

router.post('/', itemsController.createStore);
router.get('/', itemsController.getAllStores);
router.get('/:id', itemsController.getSingleStore);
router.put('/:id', itemsController.updateStore);
router.delete('/:id', itemsController.deleteStore);

router.post('/', itemsController.createStorageLocation);
router.get('/', itemsController.getAllStorageLocations);
router.get('/:id', itemsController.getSingleStorageLocation);
router.put('/:id', itemsController.updateStorageLocation);
router.delete('/:id', itemsController.deleteStorageLocation);



// createItems, getAllItems, getSingleItems, postSingleItems, updateItems, deleteItems, 
//   createItemCategory, , , postsingleItemCategory, , , 
//   , , , postSingleStore, , ,
//   createStorageLocation, , , postSingleStorageLocation, , 

module.exports = router;
