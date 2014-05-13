'use strict';

exports.addition = (req, res)=>{
  res.render('calc/addition', {title: 'Sum'});
};

exports.sum = (req, res)=>{
  var answer = (req.body.num1 * 1) + (req.body.num2 * 1);
  res.send({sum: answer});
};

exports.exponent = (req, res)=>{
  res.render('calc/exponent', {title: 'Power'});
};

exports.pow = (req, res)=>{
  var x = req.body.num1 * 1;
  var y = req.body.num2 * 1;
  var answer = Math.pow(x,y);
  res.send({power: answer});
};

exports.sumlist = (req, res)=>{
  res.render('calc/sumlist', {title: 'Sum List'});
};

exports.listsums = (req, res)=>{
  var answer = req.body.list;
  answer = answer.split(',').map(n=>n.trim());
  console.log(answer);
  var total = 0;
  answer.forEach(n=>{
    total += (n * 1);
  });
  res.send({list: total});
};
