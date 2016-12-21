'use strict';

// define path schema's using joi, used UI
// add middleware to validate request against request schema
// parse each response and validate again response schema


const joi = require('joi');

const model = {
  "alpaca-api-doc" : "0.0.1",
  "info": {
    "title": "Person API",
    "description": "API for Managing People",
    "version": "1.0.0"
  },
  "paths":{
    "/customer" : {
      "method" : "GET",
      "description" : "",
      "request" : {
        "queryParams" :{
          "id" : {
            "name" : "id",
            "description":"Customer Id",
            "schema" : Joi.string()
          }
        },
        "bodyParams" :{

        }
      }


    }
  }
}