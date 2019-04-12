// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
const movieDao = require('./dao/MovieDao')
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
    try {    //pass the event to call individual functions
        //const tableCreationStatus = await movieDao.createTableFunction();
        //console.log(tableCreationStatus);
        //const year = 2015; // these should be passed via event
        //const title = "The Big New Movie";
        //const insert = await movieDao.insertIntoMovieFunction(year, title)
        //const del = await movieDao.deleteItemConditionFunction(year,title);
        return del;
    }catch(error){
        console.log(error)
        return error;
    }   
    
};


