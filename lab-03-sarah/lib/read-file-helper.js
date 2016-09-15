'use strict';

const fs = require('fs');


module.exports = function(callback){
  var hexArray = [];
  fs.readFile(`${__dirname}/../data/one.text`, function(err, data){
    if (err) throw err;
    var hex = data.toString('hex', 0, 1);
    console.log(hex);
    hexArray.push(hex);
    fs.readFile(`${__dirname}/../data/two.text`, function(err, data){
      if (err) throw err;
      var hex = data.toString('hex', 0, 1);
      console.log(hex);
      hexArray.push(hex);
      fs.readFile(`${__dirname}/../data/three.text`, function(err, data){
        if (err) throw err;
        var hex = data.toString('hex', 0, 1);
        console.log(hex);
        hexArray.push(hex);
        console.log(hexArray);
        callback(hexArray);
      });
    });
  });
};

// readFileHelper(function(hexArray){
//   console.log('hexArray', hexArray);
//   // assert goes here
// });

console.log('lulwat');
