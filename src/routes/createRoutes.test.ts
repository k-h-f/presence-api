import request from 'supertest';
import { app, server } from '../app';

describe('Create route', () => {
  afterAll(() => server.close());

  describe('Happy paths', () => {
    it('/create/:serverId', async () => {
      await request(app)
        .post('/create/1234')
        .send({ bots: ['456', '789'] })
        .set('Accept', 'application/json')
        .expect(200, 'Monitoring started');
    });
  });

  describe('Unhappy paths', () => {
    it('should fail when server id is invalid', async () => {
      await request(app)
        .post('/create/1234aaa')
        .set('Accept', 'application/json')
        .expect(400, 'Validation Error: "serverId" must be a number');
    });

    it('should fail when bots is empty', async () => {
      await request(app)
        .post('/create/1234')
        .set('Accept', 'application/json')
        .expect(400, 'Validation Error: "bots" is required');
    });

    it('should fail when bots is missing', async () => {
      await request(app)
        .post('/create/1234')
        .set('Accept', 'application/json')
        .expect(400, 'Validation Error: "bots" is required');
    });
  });
});
