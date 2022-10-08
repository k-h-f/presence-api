import request from 'supertest';
import { app, server } from '../app';

describe('Update route', () => {
  afterAll(() => server.close());

  describe('Happy paths', () => {
    it('/update/:serverId', async () => {
      await request(app)
        .post('/update/1234')
        .send({ body: { channelId: '5678', bots: ['1234'] } })
        .set('Accept', 'application/json')
        .expect(200);
    });
  });

  describe('Unhappy paths', () => {
    it('should fail when server id is invalid', async () => {
      await request(app)
        .post('/update/1234aaa')
        .set('Accept', 'application/json')
        .expect(400, 'Validation Error: "serverId" must be a number');
    });

    it('should fail when channelId in body is not a valid number', async () => {
      await request(app)
        .post('/update/1234')
        .send({ body: { channelId: {} } })
        .set('Accept', 'application/json')
        .expect(400, 'Validation Error: "body.channelId" must be a number');

      await request(app)
        .post('/update/1234')
        .send({ body: { channelId: '999a' } })
        .set('Accept', 'application/json')
        .expect(400, 'Validation Error: "body.channelId" must be a number');
    });

    it('should fail when bots in body is not valid', async () => {
      await request(app)
        .post('/update/1234')
        .send({ body: { bots: 'asde' } })
        .expect(400, 'Validation Error: "body.bots" must be an array');

      await request(app)
        .post('/update/1234')
        .send({ body: { bots: { random_field: 'random_value' } } })
        .expect(400, 'Validation Error: "body.bots" must be an array');
    });
  });
});
