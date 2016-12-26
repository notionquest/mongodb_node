var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});

/*gm('D:\workspaces\mongodb_node\image\image_input.jpg').resize('100', '100', '!').noProfile().write('D:\workspaces\mongodb_node\image\image_input_resized.jpg', function (err) {
    var thumbUrl, error;
    if (!err) {
    	console.log('done');
    } else {
    	console.log(err);
    }

   
});*/

/*var readStream = fs.createReadStream('D:/workspaces/mongodb_node/image/image_input.jpg');
gm(readStream, 'image_input.jpg')
.write('/image_input_ref.jpg', function (err) {
  if (!err) {
	  console.log('done');
  }
  else {
	  console.log(err);
	  }
});*/

/*var readStream = fs.createReadStream('D:/workspaces/mongodb_node/image/image_input.jpg');
var writeStream = fs.createReadStream('D:/workspaces/mongodb_node/image/image_input_resized.jpg');
//gm('D:/workspaces/mongodb_node/image/image_input.jpg')
gm(readStream)
.resize('200', '200')
.stream().pipe(writeStream);*/

gm('D:/workspaces/mongodb_node/image/image_input.jpg')
.stream('jpg', function (err, stdout, stderr) {
  var writeStream = fs.createWriteStream('D:/workspaces/mongodb_node/image/image_input_resized.jpg');
  stdout.pipe(writeStream);
});

gm(request(url))
.write('/path/to/reformat.png', function (err) {
  if (!err) console.log('done');
});
 