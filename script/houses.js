
//This is a native http (or https) method to perform requests

// var url = "https://anapioficeandfire.com/api/houses/";

// var http = require("https");

// http.get(url, (res) => {
// res.setEncoding("utf8");
//   let body;
//   res.on("data", data => {
//     body = JSON.parse(data);
//   });
//   res.on("end", () => {
//     bodyData = body.data;
//     bodyData.forEach(element => {
//         if(element.name != '') {
//             document.getElementById("houses").innerHTML = element.name;
//         }
//     });

    
//   });
// });

//*********************************************/

//Houses from the North

var xmlhttpNorth = new XMLHttpRequest();
var urlNorth = "https://anapioficeandfire.com/api/houses/?region=The North&pageSize=50";

xmlhttpNorth.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunctionNorth(myArr);
    }
};
xmlhttpNorth.open("GET", urlNorth, true);
xmlhttpNorth.send();

function myFunctionNorth(arr) {
    var out = "";
    var outName = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li><p><b>' +
        arr[i].name + '</b> <i>' + arr[i].words + '</i></p><p>  ' + arr[i].coatOfArms + '</p>' + '</li>';
        outName = arr[i].region;
    }
    document.getElementById("hNorth").innerHTML = out;
    document.getElementById("hNameN").innerHTML = outName;
    
}

//Houses from the Vale of Arryn

var xmlhttpVale = new XMLHttpRequest();
var urlVale = "https://anapioficeandfire.com/api/houses/?region=The Vale&pageSize=50";

xmlhttpVale.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunctionVale(myArr);
    }
};
xmlhttpVale.open("GET", urlVale, true);
xmlhttpVale.send();

function myFunctionVale(arr) {
    var out = "";
    var outName = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li><p><b>' +
        arr[i].name + '</b> <i>' + arr[i].words + '</i></p><p>  ' + arr[i].coatOfArms + '</p>' + '</li>';
        outName = arr[i].region;
    }
    document.getElementById("hVale").innerHTML = out;
    document.getElementById("hNameV").innerHTML = outName;
    
}

//Houses from the Riverlands

var xmlhttpRiverlands = new XMLHttpRequest();
var urlRiverlands = "https://anapioficeandfire.com/api/houses/?region=The Riverlands&pageSize=50";

xmlhttpRiverlands.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunctionRiverlands(myArr);
    }
};
xmlhttpRiverlands.open("GET", urlRiverlands, true);
xmlhttpRiverlands.send();

function myFunctionRiverlands(arr) {
    var out = "";
    var outName = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li><p><b>' +
        arr[i].name + '</b> <i>' + arr[i].words + '</i></p><p>  ' + arr[i].coatOfArms + '</p>' + '</li>';
        outName = arr[i].region;
    }
    document.getElementById("hRiverlands").innerHTML = out;
    document.getElementById("hNameR").innerHTML = outName;
    
}

//Houses from the Westerlands

var xmlhttpWesterlands = new XMLHttpRequest();
var urlWesterlands = "https://anapioficeandfire.com/api/houses/?region=The Westerlands&pageSize=50";

xmlhttpWesterlands.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunctionWesterlands(myArr);
    }
};
xmlhttpWesterlands.open("GET", urlWesterlands, true);
xmlhttpWesterlands.send();

function myFunctionWesterlands(arr) {
    var out = "";
    var outName = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li><p><b>' +
        arr[i].name + '</b> <i>' + arr[i].words + '</i></p><p>  ' + arr[i].coatOfArms + '</p>' + '</li>';
        outName = arr[i].region;
    }
    document.getElementById("hWesterlands").innerHTML = out;
    document.getElementById("hNameW").innerHTML = outName;
    
}

//Houses from The Iron Islands

var xmlhttpIron = new XMLHttpRequest();
var urlIron = "https://anapioficeandfire.com/api/houses/?region=Iron Islands&pageSize=50";

xmlhttpIron.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunctionIron(myArr);
    }
};
xmlhttpIron.open("GET", urlIron, true);
xmlhttpIron.send();

function myFunctionIron(arr) {
    var out = "";
    var outName = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li><p><b>' +
        arr[i].name + '</b> <i>' + arr[i].words + '</i></p><p>  ' + arr[i].coatOfArms + '</p>' + '</li>';
        outName = arr[i].region;
    }
    document.getElementById("hIron").innerHTML = out;
    document.getElementById("hNameI").innerHTML = outName;
    
}

//Houses from The Crownlands

var xmlhttpCrown = new XMLHttpRequest();
var urlCrown = "https://anapioficeandfire.com/api/houses/?region=The Crownlands&pageSize=50";

xmlhttpCrown.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunctionCrown(myArr);
    }
};
xmlhttpCrown.open("GET", urlCrown, true);
xmlhttpCrown.send();

function myFunctionCrown(arr) {
    var out = "";
    var outName = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li><p><b>' +
        arr[i].name + '</b> <i>' + arr[i].words + '</i></p><p>  ' + arr[i].coatOfArms + '</p>' + '</li>';
        outName = arr[i].region;
    }
    document.getElementById("hCrown").innerHTML = out;
    document.getElementById("hNameC").innerHTML = outName;
    
}

//Houses from The Stormlands

var xmlhttpStorm = new XMLHttpRequest();
var urlStorm = "https://anapioficeandfire.com/api/houses/?region=The Stormlands&pageSize=50";

xmlhttpStorm.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunctionStorm(myArr);
    }
};
xmlhttpStorm.open("GET", urlStorm, true);
xmlhttpStorm.send();

function myFunctionStorm(arr) {
    var out = "";
    var outName = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li><p><b>' +
        arr[i].name + '</b> <i>' + arr[i].words + '</i></p><p>  ' + arr[i].coatOfArms + '</p>' + '</li>';
        outName = arr[i].region;
    }
    document.getElementById("hStorm").innerHTML = out;
    document.getElementById("hNameS").innerHTML = outName;
    
}

//Houses from The Reach

var xmlhttpReach = new XMLHttpRequest();
var urlReach = "https://anapioficeandfire.com/api/houses/?region=The Reach&pageSize=50";

xmlhttpReach.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunctionReach(myArr);
    }
};
xmlhttpReach.open("GET", urlReach, true);
xmlhttpReach.send();

function myFunctionReach(arr) {
    var out = "";
    var outName = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li><p><b>' +
        arr[i].name + '</b> <i>' + arr[i].words + '</i></p><p>  ' + arr[i].coatOfArms + '</p>' + '</li>';
        outName = arr[i].region;
    }
    document.getElementById("hReach").innerHTML = out;
    document.getElementById("hNameRe").innerHTML = outName;
    
}

//Houses from Dorne

var xmlhttpDorne = new XMLHttpRequest();
var urlDorne = "https://anapioficeandfire.com/api/houses/?region=Dorne&pageSize=50";

xmlhttpDorne.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunctionDorne(myArr);
    }
};
xmlhttpDorne.open("GET", urlDorne, true);
xmlhttpDorne.send();

function myFunctionDorne(arr) {
    var out = "";
    var outName = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li><p><b>' +
        arr[i].name + '</b> <i>' + arr[i].words + '</i></p><p>  ' + arr[i].coatOfArms + '</p>' + '</li>';
        outName = arr[i].region;
    }
    document.getElementById("hDorne").innerHTML = out;
    document.getElementById("hNameD").innerHTML = outName;
    
}


// Collapsible Div
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}