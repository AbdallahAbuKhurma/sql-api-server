'use strict';

const pool = require('../models/pool');

class DataCollection {
  constructor(table, name){
    this.table = table;
    this.name = name;
  }

  read(id) {
    if(id) {
      return pool.query(`SELECT * FROM ${this.name} (name, price) WHERE id=$1;`, [id]);
    }
    return pool.query(`SELECT * FROM ${this.name}`);
  }

  create(obj) {
    const data = `INSERT INTO ${this.name} (name, price) VALUES ($1, $2) RETURNING *;`;
    const safeValues = [obj.name, obj.price];

    return pool.query(data, safeValues);
  }

  update(id, obj) {
    const data = `UPDATE ${this.name} SET name=$1,price=$2 WHERE id=$3 RETURNING *;`;
    const safeValues = [obj.name, obj.price, id];

    return pool.query(data, safeValues);  
  }

  delete(id) {
    return pool.query(`DELETE FROM ${this.name} WHERE id=$1 RETURNING *;`, [id]);
  }

}

module.exports = DataCollection;
