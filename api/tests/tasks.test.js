import request from 'supertest';
import app from '../../app';

describe('Tasks API', () => {
  it('should get all tasks', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should add a new task', async () => {
    const newTask = { title: 'New Task', description: 'New Task Description' };
    const response = await request(app).post('/api/tasks').send(newTask);
    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(newTask);
  });

  it('should update an existing task', async () => {
    const updateData = { title: 'Updated Task' };
    const response = await request(app).patch('/api/tasks/1').send(updateData);
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe('Updated Task');
  });

  it('should delete a task', async () => {
    const response = await request(app).delete('/api/tasks/1');
    expect(response.statusCode).toBe(204);
  });

  it('should return 404 for non-existing task', async () => {
    const response = await request(app).get('/api/tasks/999');
    expect(response.statusCode).toBe(404);
  });

  it('should return 400 for missing title', async () => {
    const response = await request(app).post('/api/tasks').send({});
    expect(response.statusCode).toBe(400);
  });
});
