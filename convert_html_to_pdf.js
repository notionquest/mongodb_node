var fs = require('fs');
var pdf = require('html-pdf');
//var html = fs.readFileSync('./html/hitachi.html', 'utf8');
var html = fs.readFileSync('./html/businesscard.html', 'utf8');
var options = { format: 'Letter' };
 
//console.log(fs.)
pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
  if (err) {
	  return console.log(err);
  }
  console.log(res);  
});