let {dynamodb} = require('../config/connectDynamoDb');
let {params} = require('../models/Movies')

const createTableFunction = ()=>{
    return new Promise((resolve,reject)=>{ 
        dynamodb.createTable(params, function(err, data) {
            if (err) {              
                response= {
                'statusCode': 400,
                'body': "Unable to create table. Error JSON:"+ JSON.stringify(err,null,2)
            }
                reject(response)
            }else{
                response= {
                    'statusCode': 202,
                    'body': "Created table. Table description JSON:"+ JSON.stringify(data,null,2)
                }
                resolve(response)
            }
        });
    });
}

module.exports={createTableFunction}