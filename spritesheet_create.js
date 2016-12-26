var Builder = require( 'node-spritesheet' ).Builder;

var builder = new Builder({
    outputDirectory: 'C:\Users\sakumar\Documents\Projects',
    outputImage: 'sprite.png',
    outputCss: 'sprite.css',
    selector: '.sprite',
    images: [ 'image1.png', 'image2.png', 'image3.png' ]
});

builder.build( function() {
    console.log( "Built from " + builder.files.length + " images" );
});