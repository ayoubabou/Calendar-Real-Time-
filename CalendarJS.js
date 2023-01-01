var months = ["January","February","March","April","May","June",
"July","August","September","October","November","December"]
var td_arr = document.getElementsByTagName("td")
var d = new Date()
document.getElementById("Month&Year").innerHTML = months[d.getMonth()] + " " + d.getFullYear()
var firstday = new Date(d.getFullYear() + "-" + parseInt(d.getMonth()+1 % 12) + "-1")
var date1 = new Date(d.getFullYear() + "-" + parseInt(d.getMonth()+1 % 12) + "-31")
var date2 = new Date(d.getFullYear() + "-" + parseInt(d.getMonth()+2 % 12) + "-1")
var lendays
if(date1.getDay() == date2.getDay()){
    lendays = 30
}else{
    if(d.getMonth() == 1){
        if(d.getFullYear() % 4 != 0){
            lendays = 28
        }else{
            lendays = 29
        }
    }else{
        lendays = 31
    }
}
var a = firstday.getDay()
for(var i=0;i<lendays;i++){
    td_arr[a].innerHTML = i+1
    a++
}
for(var i=0;i<42;i++){
    if(td_arr[i].innerHTML == ""){
        td_arr[i].style.background = "gray"
    }
    if(td_arr[i].innerHTML == d.getDate()){
        td_arr[i].style.background = "lightgreen"
    }
}




