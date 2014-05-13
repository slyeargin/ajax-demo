'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var calc = traceur.require(__dirname + '/../routes/calc.js');
  var dice = traceur.require(__dirname + '/../routes/dice.js');
  var card = traceur.require(__dirname + '/../routes/card.js');
  var poker = traceur.require(__dirname + '/../routes/poker.js');

  app.get('/', dbg, home.index);
  app.get('/sum', dbg, calc.addition);
  app.post('/sum', dbg, calc.sum);
  app.get('/power', dbg, calc.exponent);
  app.post('/power', dbg, calc.pow);
  app.get('/sumlist', dbg, calc.sumlist);
  app.post('/sumlist', dbg, calc.listsums);
  app.get('/dice', dbg, dice.single);
  app.post('/dice', dbg, dice.rollsingle);
  app.get('/pairs', dbg, dice.pairs);
  app.post('/pairs', dbg, dice.rollpairs);
  app.get('/cards', dbg, card.index);
  app.post('/cards', dbg, card.draw);
  app.get('/poker', dbg, poker.index);
  app.post('/poker', dbg, poker.draw);
  app.get('/help', dbg, home.help);
  console.log('Routes Loaded');
  fn();
}
