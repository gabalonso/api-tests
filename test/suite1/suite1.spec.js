/** LIBS */
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiJsonEqual = require('chai-json-equal');
const should = require('chai').should();
const _ = require("../commons.js");

/** JSON */
const headers = require('../data/headers.json');
const path = require('../data/path.json');
const body = require('../data/body.json');
const responses = require('../data/responses.json');

/** CHAI */
chai.use(chaiHttp);
chai.use(chaiJsonEqual);

/** TEST SUITE */
describe('Test suite name', () => {
    it('Test 1', async () => {
        const response = await _.common_post(path.path1, headers.default_headers, body.body1);
        const obtained_result = response.body;
        
        /** assertions */
        obtained_result.should.jsonEqual(responses.response1);
        obtained_result.property1.should.equal(property, "property is not the expected");
    });
    
    it('Test 2', async () => {
        const response = await _.common_post(path.path2, headers.default_headers, body.body2);
        const obtained_result = response.body;
        
        /** assertions */
        obtained_result.should.jsonEqual(responses.response2);
        obtained_result.property1.should.equal(property, "property is not the expected");
    });
});