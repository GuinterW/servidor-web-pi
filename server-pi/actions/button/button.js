var wpi = require('wiring-pi');

function sendRequest(url,callback,postData) {
    var req = createXMLHTTPObject();
    if (!req) return;
    var method = (postData) ? "POST" : "GET";
    req.open(method,url,true);
    req.setRequestHeader('User-Agent','XMLHTTP/1.0');
    if (postData)
        req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    req.onreadystatechange = function () {
        if (req.readyState != 4) return;
        if (req.status != 200 && req.status != 304) {
//          alert('HTTP error ' + req.status);
            return;
        }
        callback(req);
    }
    if (req.readyState == 4) return;
    req.send(postData);
}

var XMLHttpFactories = [
    function () {return new XMLHttpRequest()},
    function () {return new ActiveXObject("Msxml2.XMLHTTP")},
    function () {return new ActiveXObject("Msxml3.XMLHTTP")},
    function () {return new ActiveXObject("Microsoft.XMLHTTP")}
];

function createXMLHTTPObject() {
    var xmlhttp = false;
    for (var i=0;i<XMLHttpFactories.length;i++) {
        try {
            xmlhttp = XMLHttpFactories[i]();
        }
        catch (e) {
            continue;
        }
        break;
    }
    return xmlhttp;
}

function button(){
    var url = "localhost:3000/unlock";
}

button.prototype.configInput = function(pin){
    // GPIO pin of the led
    var configPin = pin;
    wpi.setup('wpi');
    wpi.pinMode(configPin, wpi.INPUT);
    console.log('intput');
}

button.prototype.read = function(pin){
    var configTimeout = 1000;
    setInterval(function() {
        var status = wpi.digitalRead(pin);
        console.log('status: ' + status);
        if(status==1){
            //sendRequest(this.url);          
        }
    }, configTimeout);
}

module.exports = new button();