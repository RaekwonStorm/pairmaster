var fs = require('fs');
var path = require('path');

var av = require('tessel-av');
var camera = new av.Camera();
var capture = camera.capture();

capture.on('data', function() {
 fs.writeFileSync(path.join('captures/captured-via-data-event.jpg'));
});
