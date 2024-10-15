const AWS = require("aws-sdk");

exports.getTask = async(event) => {

   try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    const task = await dynamodb.get({
        TableName: 'TaskTable',
        Key: {id}
    }).promise() ;
    const result = task.Item;
    console.log(result);
    
    return {
        status: 200,
        body: result
    }
   } catch (error) {
    console.log(error);
    
   }
}