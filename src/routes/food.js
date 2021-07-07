'use strict';

const express = require('express');
const router = express.Router();
const foodModel = require('../models/food');
const dataColection = require('../models/data-collection-class');
const validator = require('../middlewares/food.validator');
const foodData = new dataColection(foodModel, 'food');

const getFoodData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const food = await foodData.read(id);
    res.json({food: food.rows});
  } catch (error) {
    next(error);
  }
};

const createFoodData = async (req, res, next) => {
  try {
    const createdFoodData = req.body;
    const newFoodData = await foodData.create(createdFoodData);
    res.json(newFoodData.rows[0]);
  } catch (error) {
    next(error);
  }
};

const updateFoodData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedFoodData = req.body;
    const newFoodData = await foodData.update(id, updatedFoodData);
    res.json(newFoodData.rows[0]);
  
  } catch (error) {
    next(error);
  }
};

const deleteFoodData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedData = await foodData.delete(id);
    res.json(deletedData.rows[0]);
  
  } catch (error) {
    next(error);
  }
};

router.get('/', getFoodData);

router.get('/:id', getFoodData);

router.post('/', validator, createFoodData);

router.put('/:id', validator, updateFoodData);

router.delete('/:id', deleteFoodData);

module.exports = router;
