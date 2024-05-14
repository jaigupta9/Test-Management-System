const timeH=document.querySelector('h1');
let timesecond=1800;

timeH.innerHTML=`00:${timesecond}`;

const countdown= setInterval(()=>{
    timesecond--;
    displaytime(timesecond);
    
    if(timesecond<=0 || timesecond<1){
        clearInterval(countdown)
    }
},1000)

function displaytime(second){
    const min=Math.floor(second/60);
    const sec=Math.floor(second%60);

    timeH.innerHTML=`${min<10 ? '0':''}${min}:${sec<10 ? '0':''}${sec}`;

}
