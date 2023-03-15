const { expect } = require('chai');
const request = require("supertest");
const baseUrl = require("../../env");


describe('PetStore Get Inventory - GET', () => {
    const response = request(baseUrl())
        .get('/store/inventory');

    it('response status equal to 200', async () => {
        console.log((await response).status);
        expect((await response).status).to.equal(200)
    })

    it('response body has 3 properties', async () => {
        console.log((await response).body);
        expect((await response).body).to.haveOwnProperty('available')
        expect((await response).body).to.haveOwnProperty('unavailable')
        expect((await response).body).to.haveOwnProperty('pending')
    })
})

