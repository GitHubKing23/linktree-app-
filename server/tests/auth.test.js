import { jest } from '@jest/globals';
import httpMocks from 'node-mocks-http';
import jwt from 'jsonwebtoken';
import { login } from '../controllers/authController.js';
import User from '../models/User.js';

beforeAll(() => {
  process.env.JWT_SECRET = 'testsecret';
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Auth Controller', () => {
  it('logs in a user with valid credentials', async () => {
    const mockUser = {
      _id: '1',
      comparePassword: jest.fn().mockResolvedValue(true)
    };
    User.findOne = jest.fn().mockResolvedValue(mockUser);
    const req = httpMocks.createRequest({
      method: 'POST',
      body: { email: 'test@example.com', password: 'pass' }
    });
    const res = httpMocks.createResponse();
    await login(req, res);
    expect(res._getStatusCode()).toBe(200);
    const data = res._getJSONData();
    expect(data.token).toBeDefined();
    // verify token structure
    const decoded = jwt.verify(data.token, 'testsecret');
    expect(decoded.id).toBe('1');
  });
});
