let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        let data = await ddb.put({
            TableName: "hirutest",
            Item: {
                price: "2",
                colour: "10"
            }
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