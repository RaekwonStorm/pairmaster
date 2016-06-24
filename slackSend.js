var Slackbot = require('slackbots');

var bot = new Slackbot({
  token: 'xoxb-54188160881-Vy8CVWJunrdwgm9q1KRxYNsW',
  name: 'pairmaster',
  id: null,
});

var botId;
var reqUserId;
var reqChannelInfo;
var reqUserTimeZones;


var botObj = {
    botFunction: function(){
      bot.on('start', function(data){
        var users = bot.getUsers();
        var usersArr = users._value.members;
        usersArr.forEach(function(user){
          if(user.name === 'pairmaster'){
            botId = user.id;
            console.log(botId);
          }
        });
      });
      bot.on('message', function(data){
        if(data.text.indexOf(botId) > -1){
          reqUserId = data.user;
          var channelId = data.channel;
          getChannel(channelId);
        }
      });
    },
    remindAllUsers: function(){
      bot.postMessageToChannel('general', 'SWITCH DRIVER! ');
    },
    remindSoleUsers: function(){
      bot.postMessageToChannel(reqChannelInfo.name, 'Hey you guys switch or ur gonna be shamed');
    },
    shameUsers: function(){
      bot.postMessageToChannel('general', 'http://tessel-02a38506f705.local:8080/');
    }

};

function getChannel(channelId){
  var channels = bot.getChannels();
  var channelsArr = channels._value.channels;
  channelsArr.forEach(function(channel){
    if(channel.id === channelId){
      reqChannelInfo = channel
      console.log(reqChannelInfo);
    }
  });
}

module.exports = botObj
