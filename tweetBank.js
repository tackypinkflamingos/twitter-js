var _ = require('underscore');

var data = [];
var numTweets = 0;

var add = function (name, text) {
  var tweetID = ++numTweets;
  data.push({ name: name, text: text, id: tweetID.toString() });
  return tweetID;
};

var list = function () {
  return _.clone(data);
};

var find = function (properties) {
  return _.where(data, properties);
};

module.exports = { add: add, list: list, find: find };


module.exports.add("Andy", "Yay! Tweet #1");

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
   var fakeName = getFakeName();
  module.exports.add( fakeName, getFakeTweet() );
  module.exports.add( fakeName, getFakeTweet() );
  module.exports.add( fakeName, getFakeTweet() );
}
