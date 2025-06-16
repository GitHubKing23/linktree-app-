import { jest } from '@jest/globals';
import httpMocks from 'node-mocks-http';
import { createLink } from '../controllers/linkController.js';
import Link from '../models/Link.js';

describe('Link Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('creates a link for the authenticated user', async () => {
    const mockLink = { _id: '123', title: 'Site', url: 'https://ex.com', user: '1' };
    Link.create = jest.fn().mockResolvedValue(mockLink);
    const req = httpMocks.createRequest({
      method: 'POST',
      body: { title: 'Site', url: 'https://ex.com' }
    });
    req.user = { id: '1' };
    const res = httpMocks.createResponse();
    await createLink(req, res);
    expect(res._getStatusCode()).toBe(201);
    const data = res._getJSONData();
    expect(data.title).toBe('Site');
    expect(Link.create).toHaveBeenCalledWith({ title: 'Site', url: 'https://ex.com', user: '1' });
  });
});
