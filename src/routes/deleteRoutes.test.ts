import request from 'supertest';
import { app, server } from '../app';

describe('Delete route', () => {
  afterAll(() => server.close());

  describe('Happy paths', () => {
    it('/delete/:serverId/bots', async () => {
      await request(app)
        .post('/delete/1234/bots')
        .send({ bots: ['456', '789'] })
        .set('Accept', 'application/json')
        .expect(200, 'Deleted bots');
    });
  });

  describe('Unhappy paths', () => {
    it('should fail when server id is invalid', async () => {
      await request(app)
        .post('/delete/1234aaa/bots')
        .set('Accept', 'application/json')
        .expect(400, 'Validation Error: "serverId" must be a number');
    });

    it('should fail when bots is empty', async () => {
      await request(app)
        .post('/delete/1234/bots')
        .send({ bots: [] })
        .set('Accept', 'application/json')
        .expect(
          400,
          'Validation Error: "bots" does not contain 1 required value(s)'
        );
    });

    it('should fail when bots is missing', async () => {
      await request(app)
        .post('/delete/1234/bots')
        .send({ bots: [] })
        .set('Accept', 'application/json')
        .expect(
          400,
          'Validation Error: "bots" does not contain 1 required value(s)'
        );
    });
  });
});
