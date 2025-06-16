import fetch from 'node-fetch';
import { request } from './setup.js';

describe('Link Routes', () => {
  let token;
  let linkId;

  beforeAll(async () => {
    await fetch(`${request}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'linkuser', email: 'link@example.com', password: 'pass' })
    });
    const res = await fetch(`${request}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'link@example.com', password: 'pass' })
    });
    const data = await res.json();
    token = data.token;
  });

  it('should create a link', async () => {
    const res = await fetch(`${request}/api/links`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ title: 'My Site', url: 'https://example.com' })
    });
    expect(res.status).toBe(201);
    const data = await res.json();
    expect(data.title).toBe('My Site');
    linkId = data._id;
  });
});
