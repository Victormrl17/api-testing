import request from 'supertest';
import app from '../../app';

describe('Assets API', () => {
  it('should get all assets', async () => {
    const response = await request(app).get('/api/assets');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should add a new asset', async () => {
    const newAsset = { name: 'New Asset', price: 300, slug: 'new-asset' };
    const response = await request(app).post('/api/assets').send(newAsset);
    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(newAsset);
  });

  it('should update an existing asset', async () => {
    const updateData = { price: 350 };
    const response = await request(app).patch('/api/assets/1').send(updateData);
    expect(response.statusCode).toBe(200);
    expect(response.body.price).toBe(350);
  });

  it('should delete an asset', async () => {
    const response = await request(app).delete('/api/assets/1');
    expect(response.statusCode).toBe(204);
  });

  it('should return 404 for non-existing asset', async () => {
    const response = await request(app).get('/api/assets/999');
    expect(response.statusCode).toBe(404);
  });

  it('should return 400 for missing name', async () => {
    const response = await request(app).post('/api/assets').send({});
    expect(response.statusCode).toBe(400);
  });
});
