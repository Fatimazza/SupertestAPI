const assert = require("chai").assert;
const app = require("../../welcomeAssertion");

// Describe & It using Mocha
// Assertion using Chai
describe("Welcome Test", function () {

    // Assert the text content
    it("App should return Welcome message", function () {
        assert.equal(app(), "Welcome to API Testing with Supertest");
    })

    // Assert text type data
    it("App data type should be String", function () {
        let response = app();
        assert.typeOf(response, "String");
    })
})