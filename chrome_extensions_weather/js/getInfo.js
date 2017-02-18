
function httpRequest(url, callback){     
    var xhr = new XMLHttpRequest();
         xhr.open("GET", url, true);
          xhr.onreadystatechange = function() {
               if (xhr.readyState == 4) {
                    callback(xhr.responseText);
                 }
              }
               xhr.send();
            }
var urll="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js";

httpRequest(urll, cBack);

function cBack(result){
  var str=unescape(result.replace(/\u/g, "%u").replace(/\\/g,''));
  str= str.replace(/\s+/g,"");
  str = str.match(/"city":"(\S*)","district"/)[1];
  var cityName=str;
   function getId(id){
    return document.getElementById(id);
   }
            function dealW(result){
              document.getElementById('cName').innerHTML=cityName; 
               info=JSON.parse(result);
               var forecast=info["data"]["forecast"];
               getId('temP').innerHTML=info["data"]["wendu"]+'℃';
               getId('alarm').innerHTML='温馨提示：'+info["data"]["ganmao"];
               var ibody=getId('ibody');
               for(var i=0;i<5;i++){
                   ibody.appendChild(document.createElement('tr'));
               }
               for(var j=0;j<5;j++){
                    var date=document.createElement('td');
                    date.innerHTML=forecast[j]["date"];
                    var tem=document.createElement('td');
                    tem.innerHTML=forecast[j]["low"].replace(/[^0-9]/ig,"")+'~'+forecast[j]["high"].replace(/[^0-9]/ig,"")+'℃';
                    var thi=document.createElement('td');
                    thi.innerHTML=forecast[j]["type"];
                    var fx=document.createElement('td');
                    fx.innerHTML=forecast[j]["fengxiang"];
                    var fl=document.createElement('td');
                    fl.innerHTML=forecast[j]["fengli"];
                    ibody.childNodes[j].appendChild(date);
                    ibody.childNodes[j].appendChild(tem);
                    ibody.childNodes[j].appendChild(thi);
                    ibody.childNodes[j].appendChild(fx);
                    ibody.childNodes[j].appendChild(fl);
                   }
            }
            var url='http://wthrcdn.etouch.cn/weather_mini?city='+cityName;
            httpRequest(url,dealW);
          }