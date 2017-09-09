var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    _id:    { type: Schema.ObjectId, required: true  },
    freq:   { type: Number, required: true  }
});

module.exports = mongoose.model('Category', schema, 'auctions');
