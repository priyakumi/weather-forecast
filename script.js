


// java script for weather forecast for 5 days


// 
 
 var d = new Date();// Date object for displaying date.
 var day = d.getDate();
 //console.log(day); 
 var m =d.getMonth();
 //console.log(m);
 var y =d.getFullYear();
 //console.log(y);
 

 //console.log("month",weekDays[day]+"."+monthArr[m]+"."+y);
 
 
 


  

  

// getData function does an api call 

function getData()
{
var name = document.querySelector('#cityname');
var cityname =document.querySelector('#cityname-header');
cityname.innerHTML= name.value;

//var requestUrl='https://api.openweathermap.org/data/2.5/forecast?q=san%20jose&appid=410cc1be343c90e417f4a417f7be0d50';

var requestUrl='https://api.openweathermap.org/data/2.5/forecast?q='+name.value+'&appid=410cc1be343c90e417f4a417f7be0d50&units=imperial';
fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
        getTemp(data);
    });
    
}
// getTemp function get an argument data and displays the min max and temperature.
function getTemp(data)
{
    var i=0;
// current day weather report

    document.getElementById('cdate').innerHTML =  d;
    
    document.getElementById('ctemp').innerHTML = "Temp: " + data.list[i].main.temp+ "°";

 

    //console.log(data.list[i].main.temp_min);

  //date

  document.getElementById("wday1").innerHTML =   day +"/"+m +"/"+y;
  document.getElementById("wday2").innerHTML =  day+1 +"/"+m +"/"+y;
  document.getElementById("wday3").innerHTML =  day+2 +"/"+m +"/"+y;
  document.getElementById("wday4" ).innerHTML= day+3 +"/"+m +"/"+y;
  document.getElementById("wday5").innerHTML =  day+4 +"/"+m +"/"+y;
    
  
 // current  temp

    document.getElementById('day-1').innerHTML = "Temp: " + data.list[i+0].main.temp+ "°";
    document.getElementById('day-2').innerHTML = "Temp: " + data.list[i+8].main.temp+ "°";
    document.getElementById('day-3').innerHTML = "Temp: " + data.list[i+16].main.temp+ "°";
    document.getElementById('day-4').innerHTML = "Temp: " + data.list[i+24].main.temp+ "°";
    document.getElementById('day-5').innerHTML = "Temp: " + data.list[i+32].main.temp+ "°";

    // weather icon

    document.getElementById('image1').src = "http://openweathermap.org/img/wn/"+ data.list[i+0].weather[0].icon +".png";
    document.getElementById('image2').src = "http://openweathermap.org/img/wn/"+ data.list[i+8].weather[0].icon +".png";
    document.getElementById('image3').src = "http://openweathermap.org/img/wn/"+ data.list[i+16].weather[0].icon +".png";
    document.getElementById('image4').src = "http://openweathermap.org/img/wn/"+ data.list[i+24].weather[0].icon +".png";
    document.getElementById('image5').src = "http://openweathermap.org/img/wn/"+ data.list[i+32].weather[0].icon +".png";
    

//Wind Speed

    document.getElementById('w1').innerHTML = "Wind speed: " + data.list[i+0].wind.speed+"MPH";
    document.getElementById('w2').innerHTML = "Wind speed: " + data.list[i+8].wind.speed+"MPH";
    document.getElementById('w3').innerHTML = "Wind speed: " + data.list[i+16].wind.speed+"MPH";
    document.getElementById('w4').innerHTML = "Wind speed: " + data.list[i+24].wind.speed+"MPH";
    document.getElementById('w5').innerHTML = "Wind speed: " + data.list[i+32].wind.speed+"MPH";
   
//visibility
    document.getElementById('v1').innerHTML = "Visibility " + data.list[i+0].visibility;
    document.getElementById('v2').innerHTML = "Visibility " + data.list[i+8].visibility; 
    document.getElementById('v3').innerHTML = "Visibility " + data.list[i+16].visibility;
    document.getElementById('v4').innerHTML = "Visibility " + data.list[i+24].visibility;
    document.getElementById('v5').innerHTML = "Visibility " + data.list[i+32].visibility;

}



