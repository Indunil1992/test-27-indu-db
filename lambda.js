let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        let data = await ddb.query({
            TableName: "hirutest",
            ExpressionAttributeValues: {
                ':@1': "NaN"
            },
            KeyConditionExpression: "price < :@1",
            FilterExpression: "x = :@1"
        }).promise();
        console.log("data");
        console.log(data);
    } catch (err) {
        // error handling goes here
        console.log("err");
        console.log(err);

    };

    return { "message": "Successfully executed timestamp" };
};