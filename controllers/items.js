const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const createItems = async (req, res) => {
  // #swagger.tags = ['Items']
  // #swagger.description = 'Endpoint to create a Items'
  try {
    const item = {
      
      ItemId: req.body.ItemId,
      ItemName: req.body.ItemName,
      productGroup: req.body.productGroup,
      itemCategory: req.body.itemCategory,
      itemManufacturer: req.body.itemManufacturer,
      ItemCreatedAt: req.body.ItemCreation,
    };
    
    const response = await mongodb
      .getDb()
      .db()
      .collection('Items')
      .insertOne(item);

      if (response.acknowledged) {
        res.status(201).json(response);
      } else {
        res.status(500).json(response.error || 'Error occurred while creating Items.');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

const getSingleItems = async (req, res) => {
  // #swagger.tags = ['Items']
  // #swagger.description = 'Endpoint to get one Items'
  try {
    // Validate ID format
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid Items ID format');
      return;
    }

    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('Items')
      .findOne({ _id: userId });

    if (!result) {
      res.status(404).json('Item not found');
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getAllItems = async (req, res, next) => {
  // #swagger.tags = ['Items']
  // #swagger.description = 'Endpoint to get all Items'
  const result = await mongodb.getDb().db().collection('Items').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

//POST request to get a single contact
const postSingleItems = async (req, res, next) => {
  // #swagger.tags = ['Items']
  // #swagger.description = 'Endpoint to post one Items'
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('Items')
      .findOne({ _id: userId });

    if (!result) {
      res.status(404).json('Items not found');
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

const updateItems = async (req, res) => {
  // #swagger.tags = ['Items']
  // #swagger.description = 'Endpoint to update all Items'
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    NameId: req.body.NameId,
    Name: req.body.Name,
    FillDate: req.body.FillDate,
    Prescription: req.body.Prescription,
    Rx : req.body.Rx,
    Qty: req.body.Qty,
    Prescriber: req.body.Prescriber,
    Pharmacist: req.body.Pharmacist,
    NDC: req.body.NDC,
    Insurance: req.body.Insurance,
    ClaimReference: req.body.Claim,
    Price: req.body.Price,
    ItemUpdatedAt: req.body.ItemUpdate,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('Items')
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the Item.');
  }
};

const deleteItems = async (req, res) => {
  // #swagger.tags = ['Items']
  // #swagger.description = 'Endpoint to delete a Items'
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid Item ID format');
      return;
    }
    
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection('Items')
      .deleteOne({ _id: userId },true);
      
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Error deleting Item.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const createItemCategory = async (req, res) => {
    // #swagger.tags = ['Items']
    // #swagger.description = 'Endpoint to create a ItemCategory'
    try {
      const itemCategory = {
        ItemCategoryId: req.body.ItemCategoryId,
        ItemCategoryName: req.body.ItemCategoryName,
        ItemCategoryCreatedAt: req.body.ItemCategoryCreatedAt,
      };
      
      const response = await mongodb
        .getDb()
        .db()
        .collection('ItemCategory')
        .insertOne(item);
  
        if (response.acknowledged) {
          res.status(201).json(response);
        } else {
          res.status(500).json(response.error || 'Error occurred while creating itemCategory.');
        }
      } catch (err) {
        res.status(500).json(err);
      }
    };

const getSingleItemCategory = async (req, res) => {
  // #swagger.tags = ['ItemCategory']
  // #swagger.description = 'Endpoint to get one ItemCategory'
  try {
    // Validate ID format
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid Items ID format');
      return;
    }

    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('ItemCategory')
      .findOne({ _id: userId });

    if (!result) {
      res.status(404).json('Item not found');
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getAllItemCategories = async (req, res, next) => {
  // #swagger.tags = ['ItemCategory']
  // #swagger.description = 'Endpoint to get all ItemCategory'
  const result = await mongodb.getDb().db().collection('ItemCategory').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

    // const createItemCategory = async (req, res) => {
    //   // #swagger.tags = ['Items']
    //   // #swagger.description = 'Endpoint to create a Items'
    //   try {
    //     const itemCategory = {
    //       CategoryName: req.body.CategoryName
    //     };
        
    //     const response = await mongodb
    //       .getDb()
    //       .db()
    //       .collection('Items')
    //       .insertOne(item);
    
    //       if (response.acknowledged) {
    //         res.status(201).json(response);
    //       } else {
    //         res.status(500).json(response.error || 'Error occurred while creating itemCategory.');
    //       }
    //     } catch (err) {
    //       res.status(500).json(err);
    //     }
    //   };



//POST request to get a single contact

const postsingleItemCategory = async (req, res, next) => {
  // #swagger.tags = ['ItemCategory']
  // #swagger.description = 'Endpoint to post one ItemCategory'
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('ItemCategory')
      .findOne({ _id: userId });

    if (!result) {
      res.status(404).json('ItemCategory not found');
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

const updateItemCategory = async (req, res) => {
  // #swagger.tags = ['ItemCategory']
  // #swagger.description = 'Endpoint to update all ItemCategory'
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    ItemCategoryName: req.body.ItemCategoryName,
    ItemCategoryUpdatedAt: req.body.ItemCategoryUpdatedAt,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('ItemCategory')
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the CategoryName.');
  }
};

const deleteItemCategory = async (req, res) => {
  // #swagger.tags = ['ItemCategory']
  // #swagger.description = 'Endpoint to delete a ItemCategory'
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid ItemCategory ID format');
      return;
    }
    
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection('ItemCategory')
      .deleteOne({ _id: userId },true);
      
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Error deleting ItemCategory.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const createStore = async (req, res) => {
  // #swagger.tags = ['Stores']
  // #swagger.description = 'Endpoint to create a Store'
  try {
    const item = {
      StoreId: req.body.StoreId,
      StoreName: req.body.StoreName,
      StoreLocation: req.body.StoreLocation,
      Storenumber: req.body.StoreNumber,
      StoreAddress: req.body.StoreAddress,
      StorePhone: req.body.StorePhone,
      StoreFax: req.body.StoreFax,
      StoreEmail: req.body.StoreEmail,
      StoreCreatedAt: req.body.StoreCreatedAt,

    };
    
    const response = await mongodb
      .getDb()
      .db()
      .collection('Stores')
      .insertOne(item);

      if (response.acknowledged) {
        res.status(201).json(response);
      } else {
        res.status(500).json(response.error || 'Error occurred while creating Store.');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

const getSingleStore = async (req, res) => {
  // #swagger.tags = ['Stores']
  // #swagger.description = 'Endpoint to get one Store'
  try {
    // Validate ID format
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid Store ID format');
      return;
    }

    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('Stores')
      .findOne({ _id: userId });

    if (!result) {
      res.status(404).json('Store not found');
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getAllStores = async (req, res, next) => {
  // #swagger.tags = ['Stores']
  // #swagger.description = 'Endpoint to get all Stores'
  const result = await mongodb.getDb().db().collection('Store').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

//POST request to get a single contact
const postSingleStore = async (req, res, next) => {
  // #swagger.tags = ['Store']
  // #swagger.description = 'Endpoint to post one Store'
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('Store')
      .findOne({ _id: userId });

    if (!result) {
      res.status(404).json('Store not found');
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

const updateStore = async (req, res) => {
  // #swagger.tags = ['Stores']
  // #swagger.description = 'Endpoint to update all Store'
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    StoreName: req.body.StoreName,
    StoreLocation: req.body.StoreLocation,
    Storenumber: req.body.StoreNumber,
    StoreAddress: req.body.StoreAddress,
    StorePhone: req.body.StorePhone,
    StoreFax: req.body.StoreFax,
    StoreEmail: req.body.StoreEmail,
    StoreUpdatedAt: req.body.StoreUpdatedAt,

  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('Stores')
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the Store.');
  }
};

const deleteStore = async (req, res) => {
  // #swagger.tags = ['Stores']
  // #swagger.description = 'Endpoint to delete a Store'
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid Store ID format');
      return;
    }
    
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection('Stores')
      .deleteOne({ _id: userId },true);
      
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Error deleting Store.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};


const createStorageLocation = async (req, res) => {
  // #swagger.tags = ['StorageLocation']
  // #swagger.description = 'Endpoint to create a StorageLocation'
  try {
    const item = {
      StorageLocationId: req.body.StorageLocationId,
      StorageLocationName: req.body.StorageLocationName,
      StorageLocationCreatedAt: req.body.StorageLocationCreatedAt,

    };
    
    const response = await mongodb
      .getDb()
      .db()
      .collection('StorageLocation')
      .insertOne(item);

      if (response.acknowledged) {
        res.status(201).json(response);
      } else {
        res.status(500).json(response.error || 'Error occurred while creating StorageLocation.');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

const getSingleStorageLocation = async (req, res) => {
  // #swagger.tags = ['StorageLocation']
  // #swagger.description = 'Endpoint to get one StorageLocation'
  try {
    // Validate ID format
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid StorageLocation ID format');
      return;
    }

    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('StorageLocation')
      .findOne({ _id: userId });

    if (!result) {
      res.status(404).json('StorageLocation not found');
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getAllStorageLocations = async (req, res, next) => {
  // #swagger.tags = ['StorageLocation']
  // #swagger.description = 'Endpoint to get all StorageLocation'
  const result = await mongodb.getDb().db().collection('StorageLocation').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

//POST request to get a single contact
const postSingleStorageLocation = async (req, res, next) => {
  // #swagger.tags = ['StorageLocation']
  // #swagger.description = 'Endpoint to post one StorageLocation'
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('StorageLocation')
      .findOne({ _id: userId });

    if (!result) {
      res.status(404).json('StorageLocation not found');
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

const updateStorageLocation = async (req, res) => {
  // #swagger.tags = ['StorageLocation']
  // #swagger.description = 'Endpoint to update all StorageLocation'
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    StorageLocationName: req.body.StorageLocationName,
    StorageLocation: req.body.StorageLocation,
    StorageLocationUpdatedAt: req.body.StorageLocationUpdatedAt,

  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('StorageLocation')
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the StorageLocation.');
  }
};

const deleteStorageLocation = async (req, res) => {
  // #swagger.tags = ['StorageLocation']
  // #swagger.description = 'Endpoint to delete a StorageLocation'
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Invalid StorageLocation ID format');
      return;
    }
    
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection('StorageLocation')
      .deleteOne({ _id: userId },true);
      
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Error deleting StorageLocation.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports = { 
  createItems, getAllItems, getSingleItems, postSingleItems, updateItems, deleteItems, 
  createItemCategory, getAllItemCategories, getSingleItemCategory, postsingleItemCategory, updateItemCategory, deleteItemCategory, 
  createStore, getAllStores, getSingleStore, postSingleStore, updateStore, deleteStore,
  createStorageLocation, getAllStorageLocations, getSingleStorageLocation, postSingleStorageLocation, updateStorageLocation, deleteStorageLocation
};
