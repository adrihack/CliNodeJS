#!/usr/bin/env node
// WRoghIvcyapItc5

var program = require('commander');
const axios = require('axios');
const weather = require('openweather-apis');
const inquirer = require('inquierer')
    weather.setLang('pl');
    weather.setCityId(4367872);
    weather.setUnits('metrics');
    weather.setAPPID('ab6e56e701352d48943ec0b31726adfe\n');

   program
  .arguments('<ActuWeather>')
  .option('-c, --city <city>', 'Weather of city choosed')
  .option('-w, --wind <wind>', 'print power of wind in the city choosed')
  .option('-tc, --temperatureCelcius <temperature>', 'print temperature °C')
  .option('-tf, --temperatureFarenheit <temperature>', 'print temperature °F')
  .option('-p, --pressure <pressure>', 'print the athmospheric pressure' )
  .option('-H --humidity <humidity>', 'print humidity of the air')


    inquirer.prompt([{
        type: 'input',
        message: 'entrez le nom de la ville',
        name:'test input'
    }]).then((city))


       .action(function(){
           axios.get('https://openweathermap.org')
       })

       .action(function(temp){
           axios.get('http://samples.openweathermap.org/data/2.5/weather?q='+city+'&appid='+ weather.getAPPID())
               .then(function (response) {
                   console.log('In '+response.data.name + ' the temperature is ' + response.data.main.temp + ' °F' + '');
               })
       })

       .action(function(humidity){
           axios.get('http://samples.openweathermap.org/data/2.5/weather?q=London&appid='+ weather.getAPPID())
               .then(function (response) {
                   console.log('The humidity is' + response.data.main.humidity);
               })
       })


  .parse(process.argv);
