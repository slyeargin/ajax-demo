'use strict';

var _ = require('lodash');

exports.index = (req, res)=>{
  res.render('card/index', {title: 'Get a Card'});
};

exports.draw = (req, res)=>{
  var suit = _.random(1, 4);
  var card =
  res.send({suit: suit, card: card});
};
