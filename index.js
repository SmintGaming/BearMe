=#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
function bearcreate (){
fs.readFile(path.resolve(__dirname, 'bears.txt'), function (err, data) {
  var bears = data.toString().split('\n');
  var bear = bears[Math.floor(Math.random() * bears.length)];
  console.log(bear);
})};

bearcreate()

module.exports.bearcreate = bearcreate;