import request from 'supertest';
import { app } from '../app';

describe('default route', () => {
  describe('Happy path', () => {
    it('/healthcheck', async () => {
      await request(app).get('/healthcheck').expect(200, 'UP');
    });
  });
});
