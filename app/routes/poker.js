'use strict';

var _ = require('lodash');
var cards   = global.nss.db.collection('cards');
var suits   = global.nss.db.collection('suits');

exports.index = (req, res)=>{
  res.render('poker/index', {title: 'Get a Card'});
};

exports.draw = (req, res)=>{

  var hand = [];

  cards.find().toArray((e, crds)=>{
    suits.find().toArray((e, sts)=>{
      while (hand.length < 5) {
        var suitdraw = _.random(0, 3);
        var carddraw = _.random(0, 12);
        var cr = crds[carddraw];
        var st = sts[suitdraw];

        var card = {suit: cr, rank: st};
        hand.push(card);
      }
      res.send(hand);
    });
  });
};
