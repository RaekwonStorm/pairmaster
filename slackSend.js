var Slackbot = require('slackbots');

var bot = new Slackbot({
  token: 'xoxb-54188160881-wdcrswx8mDoJghZPKpheCcyg',
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
      bot.postMessageToChannel('general', 'SWITCH DRIVER!');
    },
    remindSoleUsers: function(){
      bot.postMessageToChannel(reqChannelInfo.name, 'Hey you guys switch or ur gonna be shamed')
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
