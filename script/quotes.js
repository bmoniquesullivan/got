var xmlhttp = new XMLHttpRequest();
var url = "https://got-quotes.herokuapp.com/quotes";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
        //console.log(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();



function myFunction(arr) {

    var quote = arr.quote;
    var charac = arr.character;

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("charac").innerHTML = charac;
    
    
}

function refreshPage(){
    window.location.reload();
} 
