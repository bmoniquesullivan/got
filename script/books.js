
//This is a native http (or https) method to perform requests

// var URL = "https://thronesapi.com/api/v2/Continents";

// var http = require("https");

// http.get(URL, (res) => {
//     res.setEncoding("utf8");
//       let body;
//       res.on("data", data => {
//         body = JSON.parse(data);
//       });
//       res.on("end", () => {
//         currBody = body;
//         console.log(currBody);
        
//       });
//     });
    //**************************************************************************************/

var xmlhttp = new XMLHttpRequest();
var url = "https://anapioficeandfire.com/api/books/?pageSize=100";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li> <b> ' + arr[i].name + '</b><i> - Author: ' +
        arr[i].authors + '</li></i>';
    }
    document.getElementById("books").innerHTML = out;
}