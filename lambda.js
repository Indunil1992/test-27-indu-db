let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        let data = await ddb.update({
            TableName: "hirutest",
            Key: {
                price: "1",
                colour: "2"
            }
        }).promise();

        console.log("data");
                console.log(data);
    } catch (err) {
                console.log("err");
                console.log(err);

        // error handling goes here
    };


    return { "message": "Successfully executed timestamp" };
};