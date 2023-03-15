const assert = require("chai").assert;
const request = require("supertest");
const baseUrl = 'https://petstore.swagger.io/v2'

describe("PetStore Create User - POST", () => {

    // test case
    it("Status Code Should be 200", async () => {
        const body = {
            "id": 123,
            "username": "Fatima123",
            "firstName": "Fatima",
            "lastName": "Zza",
            "email": "fatima@mail.com",
            "password": "Pass123",
            "phone": "081234567890",
            "userStatus": 0
        }
        // request to URL
        const response = await request(baseUrl)
            .post('/user')
            .send(body);
        // assertion
        assert.equal(response.status, 200);
    })
})