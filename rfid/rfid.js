// var tessel = require('tessel');
// var rfidlib = require('rfid-pn532');
var slackBot = require('../slackSend')
var startTime;
var timeIsUp;
var timeNow;





var rfid = rfidlib.use(tessel.port['A'], {
  listen: true
});

rfid.on('ready', function (version) {
 console.log('Ready to read RFID card');

 rfid.on('data', function(card) {
    startTime = Date.now();
    timeIsUp = startTime + 1200000;
    timeIsUp2 = startTime + 126000;
    var firstReminder = setInterval(function(){
      timeNow = Date.now();
      if(timeNow >= timeIsUp){
        slackSend.remindAllUsers();
        clearInterval(firstReminder);
        var finalPicTakeReminder = setInterval(function(){
          timeNow = Date.now();
          if( timeNow> timeIsUp2){
            //take Pic
            slackSend.shameUsers(pic);
            clearInterval(finalPicTakeReminder);
          }
        },1000);

      }
    },1000);

    console.log('UID: ', card.uid.toString('hex'), " at time: ", currentTime);
 });

});

rfid.on('error', function (err) {
 console.error(err);
});
