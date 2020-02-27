let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        let data = await ddb.query({
            TableName: "indunil-DB-27"
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