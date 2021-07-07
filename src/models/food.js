'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  dishType: {
    type: String,
    required:true,
  },

  dishName: {
    type: String,
    required:true,
  },

  cookingTime: {
    type: String,
    required:true,
  },

  cookingPrep: {
    type: String,
    required:true,
  },

});

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;
