const fs = require('fs');
const path = require('path');

function readFromFile(file) {
  return new Promise((resolve, reject) => {
      fs.readFile(file, function (err, data) {
          if (err) {
              console.log(err);
              reject(err);
          }
          else {
            let _data = data.toString();
            resolve(_data);
          }
      });
  });
}


const promises = [
  readFromFile(path.resolve(__dirname, '../global/index.html')), // your wrapper
  // add more components here 
  readFromFile(path.resolve(__dirname, '../components/00_view.html')), 
  readFromFile(path.resolve(__dirname, '../components/01_header.html')), 
  readFromFile(path.resolve(__dirname, '../components/03_5050.html')), 
  readFromFile(path.resolve(__dirname, '../components/06_CTAs.html')), 
];

Promise.all(promises).then(result => {
  let output = '';
  const header = result[0].split('<!-- split -->')[0];
  const footer = result[0].split('<!-- split -->')[1];

  // inject header
  output += header;

  // get each component
  result.shift(); // removes first component since it contains the header and footer
  result.forEach(res => {
    output += res;
  })

  // insert footer
  output += footer;

  //  write the file
  fs.writeFile(path.resolve(__dirname, '../../output.html'), output, 'utf8', function (err) {
    if (err) return console.log(err);
    console.log('Marketo HTML generated!')
  });
});
