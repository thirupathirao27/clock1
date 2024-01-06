
var hr=document.querySelector('.hr-handler');
var mm=document.querySelector('.min-handler');
let secHand=document.querySelector('.sec-handler');
setInterval(updateTime,1000)
function updateTime()
{
    let date=new Date();
    secHand.style.transform=`rotate(${date.getSeconds()*6}deg)`;
    mm.style.transform=`rotate(${date.getMinutes()*6}deg)`;
    hr.style.transform=`rotate(${date.getHours()*30+date.getMinutes()*0.5}deg)`;
}