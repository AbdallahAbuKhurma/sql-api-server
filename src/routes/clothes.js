'use strict';

const express = require('express');
const router = express.Router();
const clothesModel = require('../models/clothes');
const dataColection = require('../models/data-collection-class');
const validator = require('../middlewares/clothes.validator');
const clothesData = new dataColection(clothesModel, 'clothes');

const getClothesData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const clothes = await clothesData.read(id);
    res.json({clothes: clothes.rows});
  } catch (error) {
    next(error);
  }
};

const createClothesData = async (req, res, next) => {
  try {
    const createdData = req.body;
    const newClothesData = await clothesData.create(createdData);
    res.json(newClothesData.rows[0]);
  } catch (error) {
    next(error);
  }
};

const updateClothesData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const newClothesData = await clothesData.update(id, updatedData);
    res.json(newClothesData.rows[0]);
  
  } catch (error) {
    next(error);
  }
};

const deleteClothesData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedData = await clothesData.delete(id);
    res.json(deletedData.rows[0]);
  
  } catch (error) {
    next(error);
  }
};

router.get('/', getClothesData);

router.get('/:id', getClothesData);

router.post('/', validator, createClothesData);

router.put('/:id', validator ,updateClothesData);

router.delete('/:id', deleteClothesData);

module.exports = router;
