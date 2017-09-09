var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    auctionId:  { type: Number, required: true  },
    startDt:    { type: Date,   required: true  },
    endDt:      { type: Date,   required: true  },
    status:     { type: String, required: true  },
    pickupDt:   { type: Date,   required: true  },
    img:        { type: String, required: false  }
});

module.exports = mongoose.model('Auction', schema, 'auctions');
