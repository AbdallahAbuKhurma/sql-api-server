'use strict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  clothesType: {
    type: String,
    required:true,
  },

  clothesBrand: {
    type: String,
    required:true,
  },

  clothesPrice: {
    type: String,
    required:true,
  },

});

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;
