// Require supertest module for testing HTTP requests
const supertest = require("supertest");

// Require the app module
const app = require("../index.js");

// Create a supertest agent
const request = supertest(app);

// Define a test suite for the endpoints
describe("Endpoints", () => {
    // Test the first endpoint
    it('should return "This is endpoint 1" for GET /endpoint1', async () => {
        // Send a GET request to /endpoint1 and expect a 200 status code and a text response
        const response = await request
            .get("/endpoint1")
            .expect(200)
            .expect("Content-Type", /text/);
        // Expect the response text to be "This is endpoint 1"
        expect(response.text).toBe("This is endpoint 1");
    });

    // Test the second endpoint
    it('should return "This is endpoint 2" for GET /endpoint2', async () => {
        // Send a GET request to /endpoint2 and expect a 200 status code and a text response
        const response = await request
            .get("/endpoint2")
            .expect(200)
            .expect("Content-Type", /text/);
        // Expect the response text to be "This is endpoint 2"
        expect(response.text).toBe("This is endpoint 2");
    });

    // Test the third endpoint
    it('should return "This is endpoint 3" for GET /endpoint3', async () => {
        // Send a GET request to /endpoint3 and expect a 200 status code and a text response
        const response = await request
            .get("/endpoint3")
            .expect(200)
            .expect("Content-Type", /text/);
        // Expect the response text to be "This is endpoint 3"
        expect(response.text).toBe("This is endpoint 3");
    });
});
