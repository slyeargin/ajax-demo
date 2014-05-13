'use strict';

var _ = require('lodash');

exports.single = (req, res)=>{
  res.render('dice/single', {title: 'Roll Dice'});
};

exports.rollsingle = (req, res)=>{
  var answer = _.random(1, 6);
  res.send({side: answer});
};

exports.pairs = (req, res)=>{
  res.render('dice/pairs', {title: 'Roll 2 Dice'});
};

exports.rollpairs = (req, res)=>{
  var img1 = _.random(1, 6);
  var img2 = _.random(1, 6);
  var message = (img1 === img2) ? 'Yes' : 'No';
  res.send({message: message, dice1: img1, dice2: img2});
};
