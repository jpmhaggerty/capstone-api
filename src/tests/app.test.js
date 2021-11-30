var request = require('supertest');
const { app, knex } = require ('../app');
const { response } = require('express');

describe('The different GET routes for the Weather App', function () {
  beforeAll(() => {
    return knex.migrate
        .latest()
        .then( () => knex.seed.run());
  });

  afterAll(() => {
    return knex.migrate
        .rollback()
        .then(() => knex.destroy());
  });
//1
  test('Lightning Rule Check', async () => {
    const result = await request(app)
      .get('/rules/lightning')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(6);
    //expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });
//2
  test('Surface Electric Field Rule Check', async () => {
    const result = await request(app)
      .get('/rules/sefm')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(5);
    //expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });
//3
  test('Cumulus Cloud Rule Check', async () => {
    const result = await request(app)
      .get('/rules/cumulus')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(7);
    //expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });
//4
  test('Attached Anvil Rule Check', async () => {
    const result = await request(app)
      .get('/rules/attached')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(7);
    //expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });
//5
  test('Detached Anvil Rule Check', async () => {
    const result = await request(app)
      .get('/rules/detached')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(17);
    //expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });
//6
  test('Debris Cloud Rule Check', async () => {
    const result = await request(app)
      .get('/rules/debris')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(14);
    //expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });
//7
  test('Thick Cloud Layer Rule Check', async () => {
    const result = await request(app)
      .get('/rules/thick')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(7);
    //expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });
//8
  test('Disturbed Cloud Rule Check', async () => {
    const result = await request(app)
      .get('/rules/disturbed')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(3);
    //expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });
//9
  test('Smoke Plume Rule Check', async () => {
    const result = await request(app)
      .get('/rules/smoke')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(2);
    //expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });
//10
  test('Tribo-Electro Rule Check', async () => {
    const result = await request(app)
      .get('/rules/tribo')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(7);
    //expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });
  //11
  test('An error message should be sent if there endpoint is incorrect', async () => {
    const result = await request(app)
      .get('/rules/platypus')
      .expect(404)
      .then(data => data);

    expect(result.body.message).toEqual("The data you are looking for could not be found. Please try again");
  });
});

describe('The different put methods to be implemented by the Weather App', () => {
  beforeAll(() => {
    return knex.migrate
        .latest()
        .then( () => knex.seed.run());
  });

  afterAll(() => {
    return knex.migrate
        .rollback()
        .then(() => knex.destroy());
  });
  //12
  test('PUT /weatherApp/lightning/{table_name} Update the lightning commit with a user input', (done) => {
    const input = {
      id: 2,
      constraint_name: 'Flight path slant distance > 10 nmi from any non-transparent part of thunderstorm?',
      constraint_parameter_integer: null,
      constraint_operator: "===",
      constraint_parameter_boolean: false,
      user_input_integer: null,
      user_input_boolean: true,
      logic_group: "A|,B&"
    }

    request(app)
      .put('/rules/lightning')
      .send(input)
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(input)
        done();
      })
      .catch((err) => done(err));
  });
  //13
  test('after a post has been made, the uploaded data should be in the updated table', async () => {
    const result = await request(app)
      .get('/rules/lightning')
      .expect(200)
      .then(data => data);

    expect(result.body[1].constraint_parameter_boolean).toEqual(false);
  });
  //14
  test('An error message should be sent if id is not inputted', (done) => {
    const input = {
      constraint_name: 'Flight path slant distance > 10 nmi from any non-transparent part of thunderstorm?',
      constraint_parameter_integer: null,
      constraint_operator: "===",
      constraint_parameter_boolean: false,
      user_input_integer: null,
      user_input_boolean: true,
      logic_group: "A|,B&"
    };

    request(app)
      .put('/rules/lightening')
      .send(input)
      .then( res => {
        expect(res.status).toBe(404);
        expect(res.body.message).toEqual("The data could not be posted. Please try again");
        done();
      })
      .catch(err => done(err));
  });
});
