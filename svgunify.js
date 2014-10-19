var _ = require('lodash');
var path = require('path');
var fs = require('fs');
var libxmljs = require("libxmljs");

var inputDir = path.resolve(__dirname, 'input');
inputDir = '/Volumes/iMac/workspace/android/resources/material-icons/svg/';
var outputDir = path.resolve(__dirname, 'output', 'output.svg');

var files = fs.readdirSync(inputDir);

var total = files.length;
var n = Math.sqrt(total);
var m = 0;
if (n > parseInt(n)) {
  n += 1;
}
n = parseInt(n);
m = total / n;
if (m > parseInt(m)) {
  m += 1;
}
m = parseInt(m);

var res = '';
var i = 0;
_.each(files, function(fileDir) {
	if(fileDir === '.DS_Store'){
		return;
	}
  try {
    console.log('Read: ', path.resolve(inputDir, fileDir));
    var content = fs.readFileSync(path.resolve(inputDir, fileDir), {
      encoding: 'utf8'
    });
    var xmlDoc = libxmljs.parseXml(content);
    _.each(xmlDoc.childNodes(), function(child) {
      var tmp = child.toString();
      var y = parseInt(i / n);
      var x = i - y * n;
      tmp = tmp.replace('<g ', '<g transform="translate(' + (x * 24) + ', ' + (y * 24) + ')" ');
      res += tmp;
    });
    i += 1;
  } catch (ex) {
  	console.log('Error: ', path.resolve(inputDir, fileDir));
  	throw 'unknow';
  }
});

res = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="' + (n * 24) + 'px" height="' + (m * 24) + 'px" viewBox="0 0 ' + (n * 24) + ' ' + (m * 24) + '" enable-background="new 0 0 ' + (n * 24) + ' ' + (m * 24) + '" xml:space="preserve">' +
  res +
  '</svg>';

fs.writeFile(outputDir, res);