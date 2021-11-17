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

  test('Homepage criteria view', async () => {
    const result = await request(app)
      .get('/weatherApp')
      .expect(200)
      .then(data = data);

    expect(result.body).toEqual(expect.arrayContaining(['Lightning Rule', 'Surface Electric Field Rule']));
  });

  test('Lightning Rule Check', async () => {
    const result = await request(app)
      .get('/weatherApp/lightning')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(5);
    expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });

  test('Surface Electric Field Rule Check', async () => {
    const result = await request(app)
      .get('/weatherApp/sefm')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(5);
    expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });

  test('Cumulus Cloud Rule Check', async () => {
    const result = await request(app)
      .get('/weatherApp/cumulus')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(5);
    expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });

  test('Attached Anvil Rule Check', async () => {
    const result = await request(app)
      .get('/weatherApp/attachedAnvil')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(5);
    expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });

  test('Detached Anvil Rule Check', async () => {
    const result = await request(app)
      .get('/weatherApp/detachedAnvil')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(5);
    expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });

  test('Debris Cloud Rule Check', async () => {
    const result = await request(app)
      .get('/weatherApp/debris')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(5);
    expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });

  test('Thick Cloud Layer Rule Check', async () => {
    const result = await request(app)
      .get('/weatherApp/thickCloud')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(5);
    expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });

  test('Disturbed Cloud Rule Check', async () => {
    const result = await request(app)
      .get('/weatherApp/disturbedCloud')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(5);
    expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });

  test('Smoke Plume Rule Check', async () => {
    const result = await request(app)
      .get('/weatherApp/smokePlume')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(5);
    expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });
});

describe('The different patch methods to be implemented by the Weather App', () => {
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

  test('PATCH /weatherApp/lightning/{table_name} Update the lightning commit with a user input', (done) => {
    request(app)
      .patch('/weatherApp/lightning/lightning_rule')
      .send({
        input: user,
        criteria1: 8,
        criteria2: 4,
        criteria3: true,
        criteria4: true,
        criteria5: true
      })
      .then(res => {
        expect(res.status).toBe(201)
        expect(res.body).toEqual('Successfully updated user inputs in lightning_rule table')
        done();
      })
      .catch((err) => done(err));
  });

  test('after a post has been made, the uploaded data should be in the updated table', async () => {
    const result = await request(app)
      .get('/weatherApp/lightning')
      .expect(200)
      .then(data => data);

    expect(result.body[0].user_input_integer).toEqual(8);
  })
});
