var tessel = require('tessel');
var rfidlib = require('rfid-pn532');

var rfid = rfidlib.use(tessel.port['A'], {
  listen: true
});

rfid.on('ready', function (version) {
 console.log('Ready to read RFID card');

 rfid.on('data', function(card) {
    var currentTime = new Date()
   console.log('UID: ', card.uid.toString('hex'), " at time: ", currentTime);
 });

});

rfid.on('error', function (err) {
 console.error(err);
});
