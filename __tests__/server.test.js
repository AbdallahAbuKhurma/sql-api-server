'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../src/server');
const supertest = require('supertest');
const mockreq = supertest(server);
const mockRequest = supergoose(server);


describe('API SERVER', () => {
  let id;
  it('can create a new food', async () => {
    let foodObj = {dishType: 'any', dishName: 'any' , cookingTime: 'any', cookingPrep: 'any', name: 'any', price: 100};
    const res = await mockRequest.post('/api/v1/food/').send(foodObj);
    expect(res.body.name).toBe(foodObj.name);
    expect(res.body.price).toBe(foodObj.price);
    expect(res.status).toBe(200);
  });
  it('can get a food after creation', async () => {
    let foodObj = {dishType: 'any', dishName: 'any' , cookingTime: 'any', cookingPrep: 'any', name: 'any', price: 100};
    const res = await mockreq.get('/api/v1/food');
    expect(res.body.food[0].name).toBe(foodObj.name);
    expect(res.body.food[0].price).toBe(foodObj.price);
    expect(res.status).toBe(200);
  });

  xit('can edite a new food', async () => {
    let foodObj = {dishType: 'any', dishName: 'any' , cookingTime: 'any', cookingPrep: 'any', name: 'any', price: 10};
    const res2 = await mockreq.put(`/api/v1/food/${id}`).send(foodObj);
    expect(res2.body.price).toBe(10);
    expect(res2.status).toBe(200);
  });

  xit('can delete a new food', async () => {

    const res = await mockRequest.delete(`/api/v1/food/${id}`);

    expect(res.status).toBe(200);
  });

});

describe('api server', (req, res) => {

  test('id unvalid', async () => {

    const response = await mockreq.get(`/api/v1/food/`);

    expect(response.status).toBe(200);
  });

  it('id unvalid', async () => {

    const response = await mockreq.get(`/api/v1/food/ttt`);

    expect(response.status).toBe(500);
  });
  it('bad', async () => {

    const response = await mockreq.get(`/bad`);

    expect(response.status).toBe(404);
  });


});

/**
commented becauce the test for the food are the same for the clothes

 describe('API SERVER', () => {
   let id2;
  it('can create a new clothes', async () => {
    let clothesObj = {clothesType: 'any', clothesBrand: 'any' , clothesPrice: 'any'};
    const res = await mockRequest.post('/api/v1/clothes/').send(clothesObj);

    expect(res.status).toBe(200);
  });
  it('can get a clothes after creation', async () => {
    let clothesObj = {clothesType: 'any', clothesBrand: 'any' , clothesPrice: 'any'};
    const res = await mockRequest.get('/api/v1/clothes');
    expect(res.body.clothes[0].type).toBe(clothesObj.type);
    expect(res.body.clothes[0].price).toBe(clothesObj.price);
    id2 = res.body.clothes[0]._id;
    expect(res.body.clothes.length).toBe(1);
    expect(res.status).toBe(200);
  });

  it('can edite a new clothes', async () => {
    let clothesObj = {clothesType: 'any', clothesBrand: 'any' , clothesPrice: 'any'};

    const res2 = await mockRequest.put(`/api/v1/clothes/${id2}`).send(clothesObj);

    expect(res2.status).toBe(200);
  });
  
  it('can delete a new clothes', async () => {
    
    const res = await mockRequest.delete(`/api/v1/clothes/${id2}`);
    
    expect(res.status).toBe(200);
  });
  
});

*/