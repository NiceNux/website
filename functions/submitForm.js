"use strict";

exports.handler = (event, context, callback) => {
  let AWS = require('aws-sdk');

  const querystring = require('querystring'); // Help us parse the form data


  AWS.config.region = 'us-east-2'; // Region

  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:88d40a15-8219-413e-9141-02064462aab1'
  });
  let ddb = new AWS.DynamoDB();
  const formData = querystring.parse(event.body);
  const requestUpdatesBool = formData.requestUpdates === 'on';
  let params = {
    "TableName": "NiceNuxSubmissions",
    "Key": {
      'email': {
        "S": formData.email
      }
    }
  };
  ddb.getItem(params, function (err, dbItem) {
    if (err) {
      callback(err, null);
    } else {
      if (dbItem.Item) {
        let params = {
          "TableName": "NiceNuxSubmissions",
          "Key": {
            'email': {
              "S": formData.email
            }
          },
          "ExpressionAttributeValues": {
            ":messages": {
              "L": [{
                "M": {
                  "message": {
                    "S": formData.message
                  },
                  "timeStamp": {
                    "N": Date.now().toString()
                  }
                }
              }]
            }
          },
          "UpdateExpression": "SET messages = list_append(messages, :messages)"
        };
        ddb.updateItem(params, function (err, data) {
          if (err) {
            console.log("Unable to insert item. Error JSON:", JSON.stringify(err, null, 2));
          } else {
            console.log("SUCCESS");
          }
        });
      } else {
        console.log("putting item", formData);
        let params = {
          "TableName": "NiceNuxSubmissions",
          "Item": {
            "email": {
              "S": formData.email
            },
            "messages": {
              "L": [{
                "M": {
                  "message": {
                    "S": formData.message
                  },
                  "timeStamp": {
                    "N": Date.now().toString()
                  }
                }
              }]
            },
            "reqUpdates": {
              "BOOL": requestUpdatesBool
            }
          }
        };
        ddb.putItem(params, function (err, data) {
          if (err) {
            console.log("Unable to insert item. Error JSON:", JSON.stringify(err, null, 2));
          } else {
            console.log("SUCCESS");
          }
        });
      }
    }

    callback(null, {
      statusCode: 200,
      body: "Data Submitted"
    });
  });
};