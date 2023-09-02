async function GetDdat() {
    return new Promise((ress)=>{
    xhr= new XMLHttpRequest();
    xhr.onload=async function () {
      if(xhr.status!=200){
        console.log("err");
      }else{
        res=xhr.responseText;
       fj=JSON.parse(res); fj.userAgent=navigator.userAgent.replace(/,/g,"&&");
        ress(fj);
      }
    }
    xhr.open('GET','http://ip-api.com/json/?fields=66846719');
    xhr.send();
   });
}


async function removeLG() {localStorage.removeItem("isLoged");localStorage.removeItem("loginRes");await forceToLogin();}
function forceToLogin() {miniAl("notLoged!");ML.style.display = "block";LCL.style.display = "none";LGL.style.display = "block";llOf();}
async function tryLoginCheck() {miniAl("alredyLoged");j = await lg("loginRes");J = JSON.parse(j).login;g=await loginD("login",J);}
async function loginD(xy,a) {return new Promise(async (ress,rej) => {if(a.name!="" && a.pw!=""){
fj=await GetDdat();
/*
Res=await fetch("http://ip-api.com/json/?fields=66846719");fj=await Res.json();
 fj.userAgent=navigator.userAgent.replace(/,/g,"&&");
console.log(JSON.stringify(fj));*/
 
 a.userDevice=fj;
    Url = "https://script.google.com/macros/s/AKfycbyYKy-tabN8wjBkysYiieaR3cgrLNo4lwe_XcBqDdVJWySaRn-vX3ceDLGp9Rh0wpKjBA/exec";
    data=JSON.stringify({
        type:xy,
        data:a
    });
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.onload = async function () {
        if(xhr.status!=200){
            /*console.log("er"+xhr.statusText);*/
        }else {
           res=xhr.responseText;
           ress(res);
           console.log(res);
           nm = JSON.parse(res);
           st=nm.s;
           ud={};
           ud.login=a;
           miniAl(nm.message);
            if(st==0){//invalid user
              inalidUser();
              forceToLogin();
            }else if(st==1){//sucses
              ls("isLoged",1);
              ud.acc=nm.acc;
              ls("loginRes",JSON.stringify(ud));
              logedDone(res);
            }else if(st==2){//alredy loged in       
            //LoginSucsess(res);
               ls("isLoged",1);
               ud.acc=nm.acc;
               ls("loginRes",JSON.stringify(ud));
               logedDone(res);
               
            }else if(st==3){//anither dev
              OTPCheck(nm.serverTime);
             /*console.log(hideS(nm.serverTime));*/
              loadingOff();
              llOf();
            }else if(st==00){//LC failed
               AlIn(0,"./img/kiss.gif","Failed!",nm.message); 
            }else if(st==11){//LC pased
              AlIn(0,"./img/kiss.gif","Confirmed!",nm.message);
              forceToLogin();
              loadingOff();
            }else if(st==22){//Logout success 
                AlIn(0,"./img/kiss.gif","Bye👋",nm.message);
                removeLG();
                forceToLogin();
                loadingOff();
            }
         
       }
    }
    xhr.onprogress = async function (e) {
    if(e.lengthComputable){
        /*console.log(e.total+" bytes");*/
        miniAl("data-received: "+e.total)
        }
    }
    xhr.onerror = async function () {
        miniAl("err on geting data");
    }
    xhr.open('POST',Url);
    xhr.send(data);
    }else{loadingOff();AlIn(0,"./img/no.gif","fill inputs","");}
    });
}

function Login() {loading();name =document.querySelector('.NameIn').value;pw = document.querySelector('.PWIn').value;loginD("login",{name:name,pw:pw});}
function SubmitOTP() {loading();otp = document.querySelector(".OTPIn").value;name =document.querySelector('.NameIn').value;pw = document.querySelector('.PWIn').value;if(name!=""&&pw!=""){loginD("LC",{name:name,pw:pw,otp:otp});}else{R= lg("loginRes");j =  JSON.parse(R);Da=j.login;Da.otp=otp;loginD("LC",Da);}}
async function logOut() {loading();miniAl("Trying to logout");j = await lg("loginRes");J = JSON.parse(j).login;g=await loginD("logout",J);}
