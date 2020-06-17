var toopa = document.getElementById("ball1a");
var toops = document.getElementById("ball2s");
var toopd = document.getElementById("ball3d");
var toopf = document.getElementById("ball4f");
var toopg = document.getElementById("ball5g");
var tooph = document.getElementById("ball6h");
var toopj = document.getElementById("ball7j");
var toopk = document.getElementById("ball8k");
var toopl = document.getElementById("ball9l");
var divballa = document.getElementById("balla");
var divballs = document.getElementById("balls");
var divballd = document.getElementById("balld");
var divballf = document.getElementById("ballf");
var divballg = document.getElementById("ballg");
var divballh = document.getElementById("ballh");
var divballj = document.getElementById("ballj");
var divballk = document.getElementById("ballk");
var divballl = document.getElementById("balll");
var secwarn = document.getElementById("secondwarning");
var keyTime = document.getElementsByName("second")[0].value;
var level1 = document.getElementsByName("level")[0];
var level2 = document.getElementsByName("level")[1];
var level3 = document.getElementsByName("level")[2];
var showscore = document.getElementById("score")
var t1 = 3;
var t2 = 2;
var x = .5;
var y = 1;
var z = 1.5;
var score = 0;
var downa, downs, downd, downf, downg, downh, downj, downk, downl,
scorea,scores,scored,scoref,scoreg,scoref,scorej,scorek,scorel,tops,
topd,topf,topg,toph,topj,topk,topl;
keyTime = parseInt(keyTime * 1000);
level1.checked = true

function getsetting() {
    keyTime = document.getElementsByName("second")[0].value;
    keyTime = parseInt(keyTime);
    if (keyTime < 10 || keyTime > 60) {
        secwarn.innerHTML = "زمان باید بین 10 و 60 باشد";
        console.log("hfdgjdfdfg");
    } else {
        secwarn.innerHTML = "";
        keyTime = (keyTime * 1000)
    }
    if (level1.checked) {
        x = .5;
        y = 1;
        z = 1.5;
        console.log(x);
        console.log(y);
        console.log(z);

    } else if (level2.checked) {
        x = 1;
        y = 1.5;
        z = 2;
        console.log(x);
        console.log(y);
        console.log(z);
    } else if (level3.checked) {
        x = 1.5;
        y = 1.8;
        z = 2;
        console.log(x);
        console.log(y);
        console.log(z);
    }
}
function getKey(k) {
    if (k.keyCode == 65) {
        goupa()
    } else if (k.keyCode == 83) {
        goups()
    } else if (k.keyCode == 68) {
        goupd()
    } else if (k.keyCode == 70) {
        goupf()
    } else if (k.keyCode == 71) {
        goupg()
    } else if (k.keyCode == 72) {
        gouph()
    } else if (k.keyCode == 74) {
        goupj()
    } else if (k.keyCode == 75) {
        goupk()
    } else if (k.keyCode == 76) {
        goupl()
    }else{
        alert(" ااااااوووووپپپپسسسس\n کلیدی را انتخاب کردی که وجود ندارد\n امتباز شما "+'='+showscore.innerHTML);
        location.reload()
    }
};
function goupa() {
    clearTimeout(downa);
    dis1 = setTimeout(function () {
        document.getElementById("balls").style.display = "inline-block";
    }, keyTime);
    if (toopa.offsetTop > 50) {
        setTimeout(function () {
            toopa.style.top = (toopa.offsetTop - t1) + "px"
            goupa()
        }, 10)
    } else {
        godowna()
    }

}
function goups() {
    if(divballs.style.display == !"inline-block"){
        alert(" ااااااوووووپپپپسسسس\n کلیدی را انتخاب کردی که وجود ندارد\n امتباز شما "+'='+showscore.innerHTML);
        location.reload()
    }
    clearTimeout(downs);
    if (divballs.style.display == "inline-block") {
        setTimeout(function () {
            document.getElementById("balld").style.display = "inline-block"
        }, keyTime);
    }
    if (toops.offsetTop > 50) {
        setTimeout(function () {
            toops.style.top = (toops.offsetTop - t2) + "px"
            goups()
        }, 10)
    } else {
        godowns()
    }
}
function goupd() {
    if(divballd.style.display == !"inline-block"){
        alert(" ااااااوووووپپپپسسسس\n کلیدی را انتخاب کردی که وجود ندارد\n امتباز شما "+'='+showscore.innerHTML);
        location.reload()
    }
    clearTimeout(downd);
    if (divballd.style.display == "inline-block") {
        setTimeout(function () {
            document.getElementById("ballf").style.display = "inline-block"
        }, keyTime);
    }
    if (toopd.offsetTop > 50) {
        setTimeout(function () {
            toopd.style.top = (toopd.offsetTop - t2) + "px"
            goupd()
        }, 10)
    } else {
        godownd()
    }
}
function goupf() {
    if(divballf.style.display == !"inline-block"){
        alert(" ااااااوووووپپپپسسسس\n کلیدی را انتخاب کردی که وجود ندارد\n امتباز شما "+'='+showscore.innerHTML);
        location.reload()
    }
    clearTimeout(downf);
    if (divballf.style.display == "inline-block") {
        setTimeout(function () {
            document.getElementById("ballg").style.display = "inline-block"
        }, keyTime);
    }
    if (toopf.offsetTop > 50) {
        setTimeout(function () {
            toopf.style.top = (toopf.offsetTop - t1) + "px"
            goupf()
        }, 10)
    } else {
        godownf()
    }
}
function goupg() {
    if(divballg.style.display == !"inline-block"){
        alert(" ااااااوووووپپپپسسسس\n کلیدی را انتخاب کردی که وجود ندارد\n امتباز شما "+'='+showscore.innerHTML);
        location.reload()
    }
    clearTimeout(downg);
    if (divballg.style.display == "inline-block") {
        setTimeout(function () {
            document.getElementById("ballh").style.display = "inline-block"
        }, keyTime);
    }
    if (toopg.offsetTop > 50) {
        setTimeout(function () {
            toopg.style.top = (toopg.offsetTop - t2) + "px"
            goupg()
        }, 10)
    } else {
        godowng()
    }
}
function gouph() {
    if(divballh.style.display == !"inline-block"){
        alert(" ااااااوووووپپپپسسسس\n کلیدی را انتخاب کردی که وجود ندارد\n امتباز شما "+'='+showscore.innerHTML);
        location.reload()
    }
    clearTimeout(downh);
    if (divballh.style.display == "inline-block") {
        setTimeout(function () {
            document.getElementById("ballj").style.display = "inline-block"
        }, keyTime);
    }
    if (tooph.offsetTop > 50) {
        setTimeout(function () {
            tooph.style.top = (tooph.offsetTop - t1) + "px"
            gouph()
        }, 10)
    } else {
        godownh()
    }
}
function goupj() {
    if(divballj.style.display == !"inline-block"){
        alert(" ااااااوووووپپپپسسسس\n کلیدی را انتخاب کردی که وجود ندارد\n امتباز شما "+'='+showscore.innerHTML);
        location.reload()
    }
    clearTimeout(downj);
    if (divballj.style.display == "inline-block") {
        setTimeout(function () {
            document.getElementById("ballk").style.display = "inline-block"
        }, keyTime);
    }
    if (toopj.offsetTop > 50) {
        setTimeout(function () {
            toopj.style.top = (toopj.offsetTop - t1) + "px"
            goupj()
        }, 10)
    } else {
        godownj()
    }
}
function goupk() {
    if(divballk.style.display == !"inline-block"){
        alert(" ااااااوووووپپپپسسسس\n کلیدی را انتخاب کردی که وجود ندارد\n امتباز شما "+'='+showscore.innerHTML);
        location.reload()
    }
    clearTimeout(downk);
    if (divballk.style.display == "inline-block") {
        setTimeout(function () {
            document.getElementById("balll").style.display = "inline-block"
        }, keyTime);
    }
    if (toopk.offsetTop > 50) {
        setTimeout(function () {
            toopk.style.top = (toopk.offsetTop - t2) + "px"
            goupk()
        }, 10)
    } else {
        godownk()
    }
}
function goupl() {
    if(divballl.style.display == !"inline-block"){
        alert(" ااااااوووووپپپپسسسس\n کلیدی را انتخاب کردی که وجود ندارد\n امتباز شما "+'='+showscore.innerHTML);
        location.reload()
    }
    clearTimeout(downl)
    if (toopl.offsetTop > 50) {
        setTimeout(function () {
            toopl.style.top = (toopl.offsetTop - t1) + "px"
            goupl()
        }, 10)
    } else {
        godownl()
    }
}
function godowna() {
    if (toopa.offsetTop < 460) {
        downa = setTimeout(function () {
            toopa.style.top = (toopa.offsetTop + x) + "px"
            godowna()
        }, 10)
    }
}
function godowns() {
    if (toops.offsetTop < 460) {
        downs = setTimeout(function () {
            toops.style.top = (toops.offsetTop + z) + "px"
            godowns()
        }, 10)
    }
}
function godownd() {
    if (toopd.offsetTop < 460) {
        downd = setTimeout(function () {
            toopd.style.top = (toopd.offsetTop + x) + "px"
            godownd()
        }, 10)
    }
}
function godownf() {
    if (toopf.offsetTop < 460) {
        downf = setTimeout(function () {
            toopf.style.top = (toopf.offsetTop + y) + "px"
            godownf()
        }, 10)
    }
}
function godowng() {
    if (toopg.offsetTop < 460) {
        downg = setTimeout(function () {
            toopg.style.top = (toopg.offsetTop + z) + "px"
            godowng()
        }, 10)
    }
}
function godownh() {
    if (tooph.offsetTop < 460) {
        downh = setTimeout(function () {
            tooph.style.top = (tooph.offsetTop + x) + "px"
            godownh()
        }, 10)
    }
}
function godownj() {
    if (toopj.offsetTop < 460) {
        downj = setTimeout(function () {
            toopj.style.top = (toopj.offsetTop + y) + "px"
            godownj()
        }, 10)
    }
}
function godownk() {
    if (toopk.offsetTop < 460) {
        downk = setTimeout(function () {
            toopk.style.top = (toopk.offsetTop + z) + "px"
            godownk()
        }, 10)
    }
}
function godownl() {
    if (toopl.offsetTop < 460) {
        downl = setTimeout(function () {
            toopl.style.top = (toopl.offsetTop + x) + "px"
            godownl()
        }, 10)
    }
}


function callalerts() {
    setTimeout(function () {
        
        if (divballs.style.display == "inline-block") {

           deleatScorea();
           getScores() ;
           toops.style.top=450+"px";
            alert("خوب بود حالا کلید s اضافه شد");
            
            return
        }
        callalerts()
    }, 1);
}
callalerts();
function callalertd() {
    setTimeout(function () {
        if (divballd.style.display == "inline-block") {
            deleatScores();
            getScored();
            toopd.style.top=450+"px";
            alert("خوب بود حالا کلید d اضافه شد");

            return
        }
        callalertd()
    }, 1);
}
callalertd();
function callalertf() {
    setTimeout(function () {
        if (divballf.style.display == "inline-block") {
            deleatScored();
        getScoref();
        toopf.style.top=450+"px";
            alert("خوب بود حالا کلید f اضافه شد");
            return
        }
        callalertf()
    }, 1);
}
callalertf();


function callalertg() {
    setTimeout(function () {
        if (divballg.style.display == "inline-block") {
            deleatScoref();
        getScoreg();
        toopg.style.top=450+"px";
            alert("خوب بود حالا کلید g اضافه شد");
            return
        }
        callalertg()
    }, 1);
}
callalertg();
function callalerth() {
    setTimeout(function () {
        if (divballh.style.display == "inline-block") {
            deleatScoreg();
            getScoreh();
            tooph.style.top=450+"px";
            alert("خوب بود حالا کلید h اضافه شد");
            return
        }
        callalerth()
    }, 1);
}
callalerth();



function callalertj() {
    setTimeout(function () {
        if (divballj.style.display == "inline-block") {
            deleatScoreh();
            getScorej();
            toopj.style.top=450+"px";
            alert("خوب بود حالا کلید j اضافه شد");
            return
        }
        callalertj()
    }, 1);
}
callalertj();
function callalertk() {
    setTimeout(function () {
        if (divballk.style.display == "inline-block") {
            deleatScorej();
            getScorek();
            toopk.style.top=450+"px";
            alert("خوب بود حالا کلید k اضافه شد");
            return
        }
        callalertk()
    }, 1);
}
callalertk();
function callalertl() {
    setTimeout(function () {
        if (divballl.style.display == "inline-block") {
            deleatScorek();
            getScorel();
            toopl.style.top=450+"px";
            alert("خوب بود حالا کلید l اضافه شد");
            return
        }
        callalertl()
    }, 1);
}
callalertl();
function getScorea(){
     scorea=setTimeout(function(){
         if(toopa.offsetTop<448){
             score++;
             showscore.innerHTML=score;
         }
         getScorea();
     },1000)
     
 }
getScorea();
function deleatScorea()  {            
 clearTimeout(scorea);      
  }
 function getScores(){
     scores=setTimeout(function(){
         if(toops.offsetTop<448){
             score++;
             showscore.innerHTML=score;
         }
         getScores();
     },1000)  
 }
 
 function deleatScores()  {            
 clearTimeout(scores);
 }
 function getScored(){
     scored=setTimeout(function(){
         if(toopd.offsetTop<448){
             score++;
             showscore.innerHTML=score;
         }
         getScored();
     },1000)  
 }
 function deleatScored()  {            
 clearTimeout(scored);
 }
 function getScoref(){
     scoref=setTimeout(function(){
         if(toopf.offsetTop<448){
             score++;
             showscore.innerHTML=score;
         }
         getScoref();
     },1000)  
 }
 
 function deleatScoref()  {            
 clearTimeout(scoref);
 }
 function getScoreg(){
     scoreg=setTimeout(function(){
         if(toopg.offsetTop<448){
             score++;
             showscore.innerHTML=score;
         }
         getScoreg();
     },1000)  
 }
 
 function deleatScoreg()  {            
 clearTimeout(scoreg);
 }
 function getScoreh(){
     scoreh=setTimeout(function(){
         if(tooph.offsetTop<448){
             score++;
             showscore.innerHTML=score;
         }
         getScoreh();
     },1000)  
 }
 
 function deleatScoreh()  {            
 clearTimeout(scoreh);
 }      
 function getScorej(){
     scorej=setTimeout(function(){
         if(toopj.offsetTop<448){
             score++;
             showscore.innerHTML=score;
         }
         getScorej();
     },1000)  
 }
 
 function deleatScorej()  {            
 clearTimeout(scorej);
 }      
 function getScorek(){
     scorek=setTimeout(function(){
         if(toopk.offsetTop<448){
             score++;
             showscore.innerHTML=score;
         }
         getScorek();
     },1000)  
 }
 
 function deleatScorek()  {            
 clearTimeout(scorek);
 }      
 function getScorel(){
     scorel=setTimeout(function(){
         if(toopl.offsetTop<448){
             score++;
             showscore.innerHTML=score;
         }
         getScorel();
     },1000)
 }
 
 function deleatScorel()  {            
 clearTimeout(scorel);
 }
 function endGame(){
     setTimeout(function(){
         if(toopa.offsetTop>=455||toops.offsetTop>=455||toopd.offsetTop>=455||toopf.offsetTop>=455||toopg.offsetTop>=455||tooph.offsetTop>=455||toopj.offsetTop>=455||toopk.offsetTop>=455||toopl.offsetTop>=455){
        alert(" ااااااوووووپپپپسسسس\n توپ از خط گذشت\n امتباز شما "+'='+showscore.innerHTML);
        location.reload()
        return
     } 
     endGame()
     },1)
 }
 endGame()