// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;
let {dynamodb} = require('./config/connectDynamoDb');
let {params} = require('./models/Movies')

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
exports.handler =  (event, context,callback) => {
    try {    
        dynamodb.createTable(params, function(err, data) {
            if (err) {              
            response= {
                'statusCode': 400,
                'body': "Unable to create table. Error JSON:"+ JSON.stringify(err,null,2)
            }
            }else{
                response= {
                    'statusCode': 202,
                    'body': "Created table. Table description JSON:"+ JSON.stringify(data,null,2)
                }
            }
            
            callback(null,response)
        });
    }catch(error){
        console.log(error)
        return error;
    }   
    
};
