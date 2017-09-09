var express = require('express');
var router = express.Router();

var Auction  = require('../mongo-models/auction');
var Category = require('../mongo-models/category');

/////////////////////////

router.get('/auc', function(req, res, next) {
    Auction.find
        (
            {},  
            {
                  "auctionId": 1
                , "startDt": 1
                , "endDt": 1
                , "status": 1
                , "pickupDt": 1
                , "itmLst.itemId": 1
                , "itmLst.images": {$slice:1} 
            }
        )
        .sort
        ( 
            { "auctionId": -1 } 
        )
        .limit(5)
        .exec(function(err, auctions) {
            if(err) {
                res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            else {
                res.status(200).json({
                    message: 'Auctions Retrieved',
                    obj: auctions
                });
            } 
        });
});


/////////////////////////

router.get('/auc/:id', function(req, res, next) {
    Auction.findOne
        (
            { "auctionId": req.params.id},  
            {
                  "auctionId": 1
                , "startDt": 1
                , "endDt": 1
                , "status": 1
                , "pickupDt": 1
            }
        )
        .exec(function(err, auction) {
            if(err) {
                res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            else {
                res.status(200).json({
                    message: 'Auctions Retrieved',
                    obj: auction
                });
            } 
        });
});

router.get('/cats/:id', function(req, res, next) {
    Category.aggregate([
        { "$match": { "auctionId": +req.params.id } },
        { "$unwind": '$itmLst' }, 
        { "$group": { "_id":'$itmLst.catgegory', "freq":{"$sum":1}} },
        { "$sort": { "_id": 1 } }
    ])
    .exec(function(err, categories) {
        if(err) {
            res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        else {
            res.status(200).json({
                message: 'Categories Retrieved',
                obj: categories
            });
        } 
    });
});

router.get('/total/:id', function(req, res, next) {
    Category.aggregate([
        { '$match': { 'auctionId': +req.params.id } },
        { '$unwind': '$itmLst' }, 
        { '$group': { '_id':'auctionId', 'freq':{'$sum':1}} }
    ])
    .exec(function(err, categories) {
        if(err) {
            res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        else {
            res.status(200).json({
                message: 'Category Count Retrieved',
                obj: categories
            });
        } 
    });
});


/************************************************
 GET    - Get a resource
 POST   - Create a resource
 PATCH  - Update a resource
 PUT    - Replace a resource
 Delete - Delete a resource
*************************************************/
/*
router.get('/', function(req, res, next) {
    Message.find()
        .exec(function(err, messages) {
            if(err) {
                res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            else {
                res.status(200).json({
                    message: 'Messages Retrieved',
                    obj: messages
                });
            } 
        });
});

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });

    message.save(function(err, result) {
        if(err) {
            res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        else {
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        }
    });
});

router.patch('/:id', function(req, res, next) {
    Message.findById(req.params.id, function(err, message) {
        if (err) {
            res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if(!message) {
            res.status(500).json({
                title: 'No Message Found',
                error: { message: 'Message not found' }
            });
        }
        message.content = req.body.content;
        message.save(function(err, result) {
            if(err) {
                res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            else {
                res.status(200).json({
                    message: 'Updated message',
                    obj: result
                });
            }
        })
    });
});

router.delete('/:id', function(req, res, next) {
    Message.findById(req.params.id, function(err, message) {
        if (err) {
            res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if(!message) {
            res.status(500).json({
                title: 'No Message Found',
                error: { message: 'Message not found' }
            });
        }
        message.remove(function(err, result) {
            if(err) {
                res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            else {
                res.status(200).json({
                    message: 'Deleted message',
                    obj: result
                });
            }
        })
    });
});
*/
module.exports = router;
