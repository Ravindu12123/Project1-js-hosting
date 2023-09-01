const LGL = document.querySelector('.Login-layer');
const ML = document.querySelector('.Main-layer');
const MDL = document.querySelector('.Main-Data-layer');
const bgT = document.querySelector('.bgT');
const LCL = document.querySelector('.LoginConfiremD');
const OpenScreen = document.querySelector('.bgl');
const player = document.querySelector('.RX-player');
const PlayerM = document.querySelector('.RVX_PlayerH');
const largeImgH = document.querySelector('.Large_ImageH');
const Lmg = document.querySelector('.Large_Img');
const MenuD = document.querySelector('.MenuLayer');
const MAppl = document.querySelector('.MakeAppLock');
const AppL = document.querySelector('.AppLock-Layer');
const menuObj={
    About:'<h2>About</h2><h4># This is a app was created by RX creations..<br>And we had so many contents in this app this is an only one part of our apps we had somany contents you never seened befor in other apps..<br><br>So you can get access for all our contents using Contact Us option in menu.</h4><br><h4>Xtiktok ha only maximum 20mb file so you can enjoy the contet with low cost...<br>And sorry for resource latancy because we havent large bujet for spend this project.</h4>',
    ContactUs:'<h2>Contact Us</h2><h4>contact us use this telegram bot and send the message what you want to say us and we will be reply for you!....</h4><div class="botl"><h2>GO</h2></div>',
    Password:'<h1>Not Avalable!</h1>'
}
/* functions */
function gCS(x,y) {a=window.getComputedStyle(x,null);return a.getPropertyValue(y);}
function MainOff() {ML.style.display = "none";document.querySelector('.bgl').style.display = "block";}
function loading() {document.querySelector('.Last-layer').style.display ="block";}
function loadingOff() {document.querySelector('.Last-layer').style.display = "none";}
function OTPCheck(e) {AlIn(0,"./img/Thinking.gif","Ip Changed","our server says that your Ip address was changed so please confirm your thats you using otp");ML.style.display = "block";LCL.style.display = "block";localStorage.setItem("catchK",hideS(e));}
function mData() {ML.style.display = "block";MDL.style.display = "block";OpenScreen.style.display = "none";LGL.style.display = "none";}
function llOn(x) {OpenScreen.style.display = "block";OpenScreen.style.zIndex = x;}
function llOf() {OpenScreen.style.zIndex = "99999";OpenScreen.style.display = "none";}

/*LS*/

function lg(x) {return localStorage.getItem(x);}
function ls(a,b) {return localStorage.setItem(a, b);}
function BackBS() {ML.style.display = "block";LCL.style.display = "none";LGL.style.display = "block";}
function inalidUser() {loadingOff();AlIn(0,"./img/Thinking.gif","Wrong User","Thats not valid user data.please register with us or check data you entered.");}

/*miniloadb*/
const mll=document.querySelector('.MlL');
function mloadd() {
    mll.style.display="block";
}
function mloadOff() {
    mll.style.display="none";
}