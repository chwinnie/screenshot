var page = require('webpage').create();

var today = new Date(); 
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

today = mm+'-'+dd+'-'+yyyy;

page.open('https://vouch.com/', function() {
  page.render(today+'.png');
  phantom.exit();
});