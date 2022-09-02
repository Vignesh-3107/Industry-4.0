var Counter=3107;
function visitor(){
    if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      } else {
        sessionStorage.clickcount = 3701;
      }
      document.getElementById("visit").innerHTML =  sessionStorage.clickcount;
    } 
    else{
        document.getElementById("visit").innerHTML = Counter;
    }
    location.href="./Industry4.0.html";
   
}
function visitLoading(){
    
    document.getElementById("visit").innerHTML = sessionStorage.clickcount;
    document.getElementById("follower").innerHTML = sessionStorage.count;
    document.getElementById("Followbtn").innerHTML = sessionStorage.text;
}
var Follower=489;

function followers(){
    // sessionStorage.text="Follow "/;
    document.getElementById("Followbtn").disabled = true;
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.count) {
            sessionStorage.count = Number(sessionStorage.count)+1;
          } else {
            sessionStorage.count = Follower;
          }
          document.getElementById("follower").innerHTML =  sessionStorage.count;
          document.getElementById("Followbtn").innerHTML = "Following  ";
          sessionStorage.text="Following ";
          
        } 
        else{
            document.getElementById("follower").innerHTML = 489;
            sessionStorage.text="Follow ";
        }
}
