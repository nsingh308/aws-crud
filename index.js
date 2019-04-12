// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;
const createTableDao = require('./dao/CreateTable')
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.handler =  async(event, context) => {
    try {    
        ;
        const result = await createTableDao.createTableFunction();


        return result;
    }catch(error){
        console.log(error)
        return error;
    }   
    
};


