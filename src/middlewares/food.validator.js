'use strict';

module.exports = (req, res, next) => {
  if(req.body.dishType && req.body.dishName && req.body.cookingTime && req.body.cookingPrep) {
    next();
  } else {
    next('Invalid Request Data');
  }
};
