 function myTime(){
 var today = new Date();
  var day = today.getDay();
  var Tdate=today.getDate();
  var mon=today.getMonth();
  var ampm=today.getHours() >=12 ? 'PM':'AM';
  hours = today.getHours( ) % 12;
  hours = hours ? hours : 12;
  mins=today.getMinutes();
  secs=today.getSeconds();
  mins=check(mins);
  secs=check(secs);
  hours=check(hours);
  Tdate=check(Tdate);

  var monlist=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var date = Tdate+(monlist[mon])+today.getFullYear();
  var time = hours + ":" +  mins + ":" + secs+ ampm;
  var dateTime = date+','+time;
  
  document.getElementById("displayDateTime").innerHTML = dateTime;
  
  var t = setTimeout(function(){ myTime() }, 1000);
 }
 function check(i){
     if(i<10)
     {
         i='0'+i;
     }
     return i;
 }