var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var json = JSON.stringify(data);
            blob = new Blob([json], {type: "octet/stream"});
            console.log(json);
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());

async function run() {
   ob={
   videos:[],
   photos:[],
   a:[]
   }; document.querySelectorAll("video").forEach(function (e,i) {
        ob.videos.push({vid:e.src,thumb:e.poster});
    });
    document.querySelectorAll("img").forEach(function (e,i) {
        ob.photos.push({vid:e.src,thumb:e.poster});
    });
document.querySelectorAll("a").forEach(function (e,i) {
    ob.a.push({text:e.textContent,url:e.href});
});
title=document.querySelector("title").textContent;
console.log(title);
xx=await saveData(ob,title+".json");
}

