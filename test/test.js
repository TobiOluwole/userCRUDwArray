const chai = require('chai');
const expect = chai.expect;
const app = require('../index.js');
const request = require('supertest');


describe('CRUD operations', () => {
  it('creates a user', () => {
    const user = { id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };

    // Send a POST request to the /users route with the user object in the request body
    return request(app)
      .post('/users')
      .send(user)
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(user);
      });
  });

  it('reads a user', () => {
    const user = { id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };

    // Send a GET request to the /users/1 route
    return request(app)
      .get('/users/1')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(user);
      });
  });

  it('updates a user', () => {
    const updatedUser = { id: '1', firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com' };

    // Send a PUT request to the /users/1 route with the updated user object in the request body
    return request(app)
      .put('/users/1')
      .send(updatedUser)
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(updatedUser);
      });
  });

  it('deletes a user', () => {
    // Send a DELETE request to the /users/1 route
    return request(app)
      .delete('/users/1')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ message: 'User deleted' });
      });
  });
});
