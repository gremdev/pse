var cmd = require('commander'),
    chalk = require('chalk'),
    http = require('http'),
    Table = require('cli-table2');

var apiUrl = ["phisix-api2.appspot.com", "phisix-api3.appspot.com", "phisix-api4.appspot.com"];

var table = new Table({
              head : ['Symbol', 'Name', 'Price', 'Change'],
              colWidths : [10, 35, 10, 10]
          });

cmd.version('0.0.1');

cmd.command('quote <stock>')
   .description('view current stock quote')
   .action(function(stock){
      var path = "/stocks/" + stock + ".json";
      get(path);
   });

cmd.command('list')
   .description('view currently listed companies in PSE')
   .action(function(){
     get('/stocks.json');
   });

cmd.command('*')
   .action(function(){
     console.log(chalk.red.bold("error! unknown command.\nrun " + chalk.green.bold("pse --help") + 
" for help"));
   });

cmd.parse(process.argv);

function get(path){

  http.get({
    hostname : apiUrl[0],
    port:80,
    path: path
  }, function(res){
    //res.on('data'/'end
   if(res.statusCode === 404){
     console.log(chalk.red("Cannot find stock"));
   }else if(res.statusCode === 200){
     console.log(chalk.green.bold("™hello"));
   }else{
     console.log(chalk.red.bold("Error on API origin"));
   }

  });

}
