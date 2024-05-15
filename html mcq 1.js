function check(){
    var ans1=document.myform.ans1.value;
    var ans2=document.myform.ans2.value;
    var ans3=document.myform.ans3.value;
    var ans4=document.myform.ans4.value;
    var ans5=document.myform.ans5.value;
    var ans6=document.myform.ans6.value;
    var ans7=document.myform.ans7.value;
    var ans8=document.myform.ans8.value;
    var ans9=document.myform.ans9.value;
    var ans10=document.myform.ans10.value;
    var ans11=document.myform.ans11.value;
    var ans12=document.myform.ans12.value;
    var ans13=document.myform.ans13.value;
    var ans14=document.myform.ans14.value;
    var ans15=document.myform.ans15.value;
    var ans16=document.myform.ans16.value;
    var ans17=document.myform.ans17.value;
    var ans18=document.myform.ans18.value;
    var ans19=document.myform.ans19.value;
    var ans20=document.myform.ans20.value;
    var count=0;
    if(ans1=="q"){
        count++;
    }
    if(ans2=="q"){
        count++;
    }
    if(ans3=="b"){
        count++;
    }
    if(ans4=="a"){
        count++;
    }
    if(ans5=="d"){
        count++;
    }
    if(ans6=="b"){
        count++;
    }
    if(ans7=="b"){
        count++;
    }
    if(ans8=="a"){
        count++;
    }
    if(ans9=="a"){
        count++;
    }
    if(ans10=="c"){
        count++;
    }
    if(ans11=="c"){
        count++;
    }
    if(ans12=="c"){
        count++;
    }
    if(ans13=="b"){
        count++;
    }
    if(ans14=="a"){
        count++;
    }
    if(ans15=="c"){
        count++;
    }
    if(ans16=="a"){
        count++;
    }
    if(ans17=="b"){
        count++;
    }if(ans18=="d"){
        count++;
    }if(ans19=="b"){
        count++;
    }if(ans20=="d"){
        count++;
    }
    alert("You Total Marks is "+count+" "); 
}

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
