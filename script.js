let count=1;
document.getElementById("slide1").checked = true;

setInterval(function(){
    nextimage();

}, 5000)
function nextimage() {
    count++;
    if(count>5){
        count=1;
    }
    
    document.getElementById("slide"+count).checked = true;
}