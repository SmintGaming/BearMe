#!/usr/bin/env node
/*jshint esversion: 8 */
var fs = require('fs');
var path = require('path');
async function bearcreate (){
fs.readFile(path.resolve(__dirname, 'bears.txt'), function (err, data) {
  if (err) {
    console.log(err);
  } else {
  global.bears = data.toString().split('\n');
  global.bear = bears[Math.floor(Math.random() * bears.length)];
  console.log(bear); //?
  }
});}

bearcreate(); //?

module.exports.bearcreate = bearcreate();
