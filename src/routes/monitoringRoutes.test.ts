import request from 'supertest';
import { app, server } from '../app';

describe('Monitoring route', () => {
  afterAll(() => server.close());

  describe('Happy paths', () => {
    it('/monitoring/:serverId', async () => {
      await request(app).get('/monitoring/1234').expect(200);
    });
  });

  describe('Unhappy paths', () => {
    it('should fail when server id is invalid', async () => {
      await request(app)
        .get('/monitoring/1234aaa')
        .expect(
          400,
          'Validation Error: ValidationError: "serverId" must be a number'
        );
    });
  });
});
