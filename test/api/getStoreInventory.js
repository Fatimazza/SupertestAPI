const assert = require("chai").assert;
const expect = require("chai").expect;
const request = require("supertest");
// const baseUrl = 'https://petstore.swagger.io/v2'
const baseUrl = require("../../env");

describe("PetStore Get Inventory - GET", () => {

    // test case
    it("1A Status Code should be 200", async () => {
        // request to URL
        const response = request(baseUrl())
            .get('/store/inventory');
        console.log((await response).status);
        console.log((await response).body);
        // assertion
        // sometimes failed
        assert.equal((await response).status, 200);
        expect((await response).statusCode).equal(200);
    })

    // test case alternative
    it("1B Status Code should be 200", async () => {
        // request to URL
        const response = await request(baseUrl())
            .get('/store/inventory');
        console.log(response.status);
        console.log(response.body);
        // assertion
        assert.equal(response.status, 200);
        expect(response.statusCode).equal(200);
    })
})