'use strict';

module.exports = (req, res, next) => {
  if(!req.body.clothesType || !req.body.clothesBrand || !req.body.clothesPrice) {
    next('Invalid Request Data');
  } else {
    next();
  }
};
