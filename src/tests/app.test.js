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
    expect(result.body).toHaveLength(5);
    //expect(result.body[0].constraint_name).toEqual('What is the slant distance to the lightning strike? (nmi)');
  });
//2
  test('Surface Electric Field Rule Check', async () => {
    const result = await request(app)
      .get('/rules/sefm')
      .expect(200)
      .then(data => data);

    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body).toHaveLength(6);
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
});

// describe('The different patch methods to be implemented by the Weather App', () => {
//   beforeAll(() => {
//     return knex.migrate
//         .latest()
//         .then( () => knex.seed.run());
//   });

//   afterAll(() => {
//     return knex.migrate
//         .rollback()
//         .then(() => knex.destroy());
//   });

//   test('PATCH /weatherApp/lightning/{table_name} Update the lightning commit with a user input', (done) => {
//     request(app)
//       .patch('/weatherApp/lightning/lightning_rule')
//       .send({
//         input: user,
//         criteria1: 8,
//         criteria2: 4,
//         criteria3: true,
//         criteria4: true,
//         criteria5: true
//       })
//       .then(res => {
//         expect(res.status).toBe(201)
//         expect(res.body).toEqual('Successfully updated user inputs in lightning_rule table')
//         done();
//       })
//       .catch((err) => done(err));
//   });

//   test('after a post has been made, the uploaded data should be in the updated table', async () => {
//     const result = await request(app)
//       .get('/weatherApp/lightning')
//       .expect(200)
//       .then(data => data);

//     expect(result.body[0].user_input_integer).toEqual(8);
//   })
// });
