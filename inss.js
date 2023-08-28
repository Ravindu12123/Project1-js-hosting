function init() {
XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.realOpen = XMLHttpRequest.prototype.open;
console.prototype.realLog=console.prototype.log;

const wind=window.open("","_blank");

XMLHttpRequest.prototype.open = function (a,b) {
    console.log(a,b);
    wind.document.write(a+"\n"+b);
    this.realOpen(a,b)
}


XMLHttpRequest.prototype.send = function(value) {
  this.addEventListener("progress",function(){
        console.log(value);
        wind.document.write(value);
    }, false);
  //this.realSend.apply(this, arguments);
  this.realSend(value);
};
}