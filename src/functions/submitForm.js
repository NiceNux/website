exports.handler = (event, context, callback) => {
  let AWS = require('aws-sdk');

  AWS.config.region = 'us-east-2'; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:88d40a15-8219-413e-9141-02064462aab1',
  });

  let ddb = new AWS.DynamoDB();
  
  let params = {
     "TableName": "NiceNuxSubmissions",
     "Key": {
       'email': { "S": event.email }
     }
  };

  ddb.getItem(params, function (err, data) {
      if(err) {
          callback(err, null);
      } else {
          if(data.Item) {
              let params = {
                  "TableName": "NiceNuxSubmissions",
                  "Key": {
                      'email': { "S": event.email }
                  },
                  "ExpressionAttributeValues": {
                          ":messages": {
                              "L": [
                                  {
                                      "M": {
                                          "message": {
                                              "S": event.message
                                           },
                                          "timeStamp": {
                                              "N": Date.now().toString()
                                          }
                                      }
                                  }
                              ]
                          }
                  },
                  "UpdateExpression": "SET messages = list_append(messages, :messages)"
              };
              ddb.updateItem(params, function(err, data) {
                  if (err) {
                      console.log("Unable to insert item. Error JSON:", JSON.stringify(err, null, 2));
                  } else {
                      console.log("SUCCESS");
                  }
              });
          }else {
              console.log("putting item", event);
              let params = {
                  "TableName": "NiceNuxSubmissions",
                  "Item": {
                      "email": { "S": event.email },
                      "messages": { 
                          "L": [
                              {
                                  "M":{
                                      "message": {
                                          "S": event.message
                                      },
                                      "timeStamp": {
                                          "N": Date.now().toString()
                                      }
                                  }
                              }
                          ]
                      },
                      "reqUpdates": { "BOOL": event.reqUpdates }
                  }
              };
              ddb.putItem(params, function(err, data) {
                  if (err) {
                      console.log("Unable to insert item. Error JSON:", JSON.stringify(err, null, 2));
                  } else {
                      console.log("SUCCESS");
                  }
              });
          }
      }
  });
};