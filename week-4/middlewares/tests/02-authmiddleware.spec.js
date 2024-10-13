const request = require('supertest');
const app = require('../02-authmiddleware');

describe('Authentication Middleware', () => {
    it('should allow access with a valid API key', async () => {
        const response = await request(app)
            .get('/')
            .set('100xdevs-api-key', '100xdevs_cohort3_super_secret_valid_api_key'); 

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Access granted');
    });

    it('should deny access with an invalid API key', async () => {
        const response = await request(app)
            .get('/')
            .set('100xdevs-api-key', 'invalid_api_key');

        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe('Invalid or missing API key');
    });

    it('should deny access when API key is missing', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe('Invalid or missing API key');
    });
});
