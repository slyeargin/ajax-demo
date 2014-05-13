'use strict';

var _ = require('lodash');
var cards   = global.nss.db.collection('cards');
var suits   = global.nss.db.collection('suits');
// var Mongo   = require('mongodb');

exports.index = (req, res)=>{
  res.render('card/index', {title: 'Get a Card'});
};

exports.draw = (req, res)=>{
  var suitdraw = _.random(0, 3);
  var carddraw = _.random(0, 12);

  var card = {};

  cards.find().toArray((e, crds)=>{
    suits.find().toArray((e, sts)=>{
      var cr = crds[carddraw];
      var st = sts[suitdraw];
      card.suit = cr;
      card.rank = st;

      res.send({suit: card.suit, rank: card.rank});
    });
  });
};
