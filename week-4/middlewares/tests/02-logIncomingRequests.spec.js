const request = require('supertest');
const app = require('../02-logIncomingRequests');

describe('Logging Middleware', () => {
    let consoleOutput = [];
    const mockedLog = (output) => consoleOutput.push(output);

    beforeEach(() => {
        consoleOutput = [];
        console.log = mockedLog; // Mock console.log
    });

    afterEach(() => {
        console.log = jest.fn();
    });

    it('should log incoming GET requests', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Hello, world!');
        expect(consoleOutput.length).toBe(1);
        expect(consoleOutput[0]).toMatch(/GET \/\s-\s\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/);
    });

    it('should log incoming POST requests', async () => {
        const response = await request(app).post('/');

        expect(response.statusCode).toBe(404); 
        expect(consoleOutput.length).toBe(1);
        expect(consoleOutput[0]).toMatch(/POST \/\s-\s\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/);
    });
});
