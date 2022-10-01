import request from 'supertest';
import { app, server } from '../app';

describe('Update route', () => {
  afterAll(() => server.close());

  describe('Happy paths', () => {
    it('/update/:serverId/channel', async () => {
      await request(app)
        .post('/update/1234/channel')
        .send({ channelId: '5678' })
        .set('Accept', 'application/json')
        .expect(200, '{"message":"Channel Updated"}');
    });
  });

  describe('Unhappy paths', () => {
    it('should fail when server id is invalid', async () => {
      await request(app)
        .post('/update/1234aaa/channel')
        .set('Accept', 'application/json')
        .expect(400, 'Validation Error: "serverId" must be a number');
    });

    it('should fail when channelId in body is not a valid number', async () => {
      await request(app)
        .post('/update/1234/channel')
        .send({ channelId: {} })
        .set('Accept', 'application/json')
        .expect(400, 'Validation Error: "channelId" must be a number');

      await request(app)
        .post('/update/1234/channel')
        .send({ channelId: '999a' })
        .set('Accept', 'application/json')
        .expect(400, 'Validation Error: "channelId" must be a number');
    });

    it('should fail when body is missing channelId', async () => {
      await request(app)
        .post('/delete/1234/bots')
        .set('Accept', 'application/json')
        .expect(400, 'Validation Error: "bots" is required');
    });
  });
});
