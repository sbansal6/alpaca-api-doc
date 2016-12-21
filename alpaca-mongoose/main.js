var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');

var _     = require('lodash'),
    str   = require('underscore.string');

function makeProperty(val, key, obj){
    return {
        title : str.titleize(key)
    };
}

function map(model){
    var paths = _.mapValues(blogSchema, makeProperty);

    return {
        title : '',
        description: '',
        type : 'object',
        properties : paths
    };
}

var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

var alpaca = {};
alpaca.data = [];
alpaca.schema = {};
alpaca.options = {};




console.log(JSON.stringify(blogSchema,null,4))

