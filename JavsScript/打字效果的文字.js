var NewsTime = 2000;
var TextTime = 50;
var newsi = 0;
var txti = 0;
var txttimer;
var newstimer;
var newstitle = new Array();
var newshref = new Array();
newstitle[0] = "健康是身体的本钱";
newshref[0] = "#";
newstitle[0] = "关心身体，就是关心自己";
newshref[0] = "#";
newstitle[0] = "去西藏旅游了";
newshref[0] = "#";
newstitle[0] = "大雨倾盆，很大呀";
newshref[0] = "#";

function shownew() {
    var endstr = "_";
    hwnewstr = newstitle[newsi];
    newslink = newshref[newsi];
    if (txti == (hwnewstr,length -1)) {
        endstr = "";
    }
    if (txti >= hwnewstr.length) {
        clearInterval(txttimer);
        clearInterval(newstimer);
        newsi++;
        if (newsi >= newstitle.length) {
            newsi = 0;
        }
        newstimer = setInterval("shownew()", NewsTime);
        txti = 0;
        return;
    }
    clearInterval(txttimer);
    document.getElementById("HotNews").href = newslink;
    document.getElementById("HotNews").innerHTML = hwnewstr.substring(0, txti + 1) + endstr;
    txttimer = setInterval("shownew()", TextTime);
}
shownew();