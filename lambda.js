let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        let data = await ddb.get({
            TableName: "indunil-DB-27",
            Key: {
                food: "cakes"
            }
        }).promise();
        console.log(data);
    } catch (err) {
        // error handling goes here
        console.log(err);
    };

    return { "message": "Successfully executed" };
};