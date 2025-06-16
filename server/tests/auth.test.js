import fetch from 'node-fetch';
import { request } from './setup.js';

describe('Auth Routes', () => {
  let token;
  it('should signup a user', async () => {
    const res = await fetch(`${request}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'test', email: 'test@example.com', password: 'password' })
    });
    expect(res.status).toBe(201);
    const data = await res.json();
    expect(data.token).toBeDefined();
    token = data.token;
  });

  it('should login a user', async () => {
    const res = await fetch(`${request}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'password' })
    });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.token).toBeDefined();
  });
});
