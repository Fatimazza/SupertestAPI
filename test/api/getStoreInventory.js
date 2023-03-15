const assert = require("chai").assert;
const expect = require("chai").expect;
const request = require("supertest");
const baseUrl = 'https://petstore.swagger.io/v2'

describe("PetStore Get Inventory - GET", () => {

    // test case
    it("1A Status Code should be 200", async () => {
        // request to URL
        const response = request(baseUrl)
            .get('/store/inventory');
        console.log((await response).status);
        console.log((await response).body);
        // assertion
        // sometimes failed
        assert.equal((await response).status, 200);
        expect((await response).statusCode).equal(200);
    })
})