const result = document.querySelectorAll("p")

Array.from(result).forEach((item)=>console.log(item))

const getTime = ()=>{
let date = new Date();
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()




hour =(hour<10)? "0" + hour : hour
minute =(minute<10)? "0" + minute : minute
second =(second<10)? "0" + second : second

result[0].innerText = hour;
result[1].innerText = minute;
result[2].innerText = second;
result[3].innerText = `Date : ${date.toLocaleDateString()}`


}
setInterval(()=>{
  getTime()

 
},1000)

// const arkaPlan = document.querySelectorAll("body")

const arkaResim = ()=>{
  let hour = new Date().getHours()
  if((hour>=5) && (hour<=7 )){
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/04/12/18/13/sunset-3314275__340.jpg')"
    }else if((hour>=0) && (hour <5)){
   document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2017/08/24/03/41/starry-sky-2675322__340.jpg")'
    }else if(hour<24 && hour>20){
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546__340.jpg')"
   }else if((hour>=18) && (hour <=20)){
    document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2018/09/19/23/03/sunset-3689760_960_720.jpg")'
    }else if((hour>=15) && (hour <18)){
    document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/11/29/13/07/beverage-1869722_960_720.jpg")'
    }else if((hour>=12) && (hour <15)){
    document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2019/10/13/18/23/landscape-4546830__340.jpg")'
  
    }else if((hour>=7) && (hour <12)){
  document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301__340.jpg")'

}
}
arkaResim()

setInterval(()=>{
  arkaResim();

},3600000)





