// COnverts marketo syntax into browser-friendly code and generates new HTML output file

const fs = require('fs');
const path = require('path');
var readline = require('linebyline');
var rl = readline(path.resolve(__dirname, '../../output.html'));


let marketoVariables= [];

rl.on('line', function (line) {
  if ((/(\<meta.*?class=\"(.*?)\".*?\>)/gim).test(line)) {
    marketoVariables.push({
      "id" : (line.match(/\id=\"(.*?)\"/))[1],
      "value" : (line.match(/default=\"(.*?)\"/) && (line.match(/default=\"(.*?)\"/))[1]) || (line.match(/true_value=\"(.*?)\"/) && (line.match(/false_value=\"(.*?)\"/))[1])
    });
  }
});

rl.on('close', function () {
  fs.readFile(path.resolve(__dirname, '../../output.html'), 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let _data = data.toString();
  
    marketoVariables.forEach(({id, value}) => {
      const _id = '${' + id + '}';
      _data = _data.split(_id).join(value);
    });

    fs.writeFile(path.resolve(__dirname, '../../index.html'), _data, 'utf8', function (err) {
        if (err) return console.log(err);
        console.log('All Marketo variables updated! Index.html generated!')
    });
  });
});



