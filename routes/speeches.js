/**
 * Created by mordor on 7/6/17.
 */
var express = require('express');
var router  = express.Router();
var Speech    = require('../models/speeches');

router.get('/users', function (req, res, next) {

    Speech.find({},function(err,data){
        if(err){
            res.status(500).end( JSON.stringify({ error : err, message : "An error occurred." }));
        }

        if(data){
            res.status(200).end( JSON.stringify(data));
        }else{
            res.status(200).end(  JSON.stringify({ "message" : "Data not found." }));
        }
    });
});

router.get('/users/:id', function (req, res, next) {

    Speech.findOne({ user_id : parseInt(req.params.id) },function(err,data){
        if(err) return res.status(500).end( JSON.stringify({ error : err }));

        if(data){
            return res.status(200).end( JSON.stringify(data) );
        }else{
            return res.status(500).end( JSON.stringify({"message" : "Data not found." }) );
        }
    })
});

router.post('/speeches', function (req, res, next) {

    console.log("**************************************************");
    console.log("JSON => ",req.body);
    console.log("**************************************************");

    var new_user_id = makeid();

    var speech = new Speech({
        title     :   req.body.title,
        author    :   req.body.author,
        user_id : 1,
        date    : new Date(),
        file    : [''],
        description : req.body.description
    });

    speech.save(function(err,user_data) {
        if(err){
            console.log("Speech Error :",err);
            res.status(500).end( JSON.stringify({
                status  : 500,
                message : "An error occurred.",
                error   : err
            }));

        }else{
            console.log("Speech ("+"id:"+user_data.id+") saved successfully.");

            res.status(200).end( JSON.stringify({
                status  : 200,
                message : "User data saved successfully.",
                user_id : new_user_id
            }));
        }
    });
});

router.post('/update', function (req, res, next) {
    console.log( req.body );
    Speech.findOneAndUpdate({ "user_id": parseInt(req.body.user_id) }, { $set: { name: req.body.name, email : req.body.email }}, function(err, doc){
        if (err){
            return res.status(500).end( JSON.stringify({"error":err}));
        }
        else if(doc){
            console.log("Doc =>",doc);
            return res.status(200).end( JSON.stringify({"message":"Data updated successfully"}));
        }
    });
    return res.status(200).end( JSON.stringify({"message":"Data updated successfully"}));
});

function makeid(){
    return Math.floor( Math.random() * ( 1 + 1 - 99999999 ) ) + 99999999;
}

module.exports = router;