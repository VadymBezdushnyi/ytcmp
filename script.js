var a=1 , b=1, score = 0, s = "Choose which is bigger", videos, pos = 0, fail = 0
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}
function insertVideo(block, id, hidden){
    s = "<source src=\"/videos/"+id+".mp4\" type=\"video/mp4\">";
    document.getElementById(block).innerHTML = s;
    document.getElementById(block).load();
    if(hidden){
        document.getElementById(block).style.visibility = 'hidden';
    }
    console.log(s);
}
function setNewVideos(){
    if( pos + 3 >= videos.length ){
        videos = shuffle(videos);
        pos = 0;
    }
    a = pos;
    b = pos + 1;
    insertVideo("video1",videos[a]["id"], false);
    insertVideo("video2",videos[b]["id"], false);
    pos += 2;
}
function init(){
    (function() {
        var link = "list.json";
        $.getJSON( link, function(json) {
            console.log(json);
        })
            .done(function( data ) {
                videos = shuffle(data);
                setNewVideos();
                document.getElementById("result").innerHTML = "Score: ";
                document.getElementById("fail").innerHTML = "Fail: ";
            });
    })();
}
function myMove(e) {
    if (e.style.webkitAnimationName !== 'win'){
        e.style.webkitAnimationName = 'win';
        e.style.webkitAnimationDuration = '1s';

        // make sure to reset the name after 4 seconds, otherwise another call to colorchange wont have any effect
        setTimeout(function() {
            e.style.webkitAnimationName = '';
        }, 1000);
    }
}

function select(id){
    console.log(videos[a]["views"], videos[b]["views"]);
    if((id == 1) != (videos[a]["views"] > videos[b]["views"])){
        score++;
        document.getElementById("win-block").innerHTML = videos[a]["views"].toString() + "  " +  videos[b]["views"].toString();
        myMove(document.getElementById("win-block"));
    }else{
        fail++;
    }

    if(fail == 3) {
        score = 0;
        fail = 0;
        document.body.style.backgroundColor = "#FFCCCC";
    }
    document.getElementById("result").innerHTML = "Score: " + score;
    document.getElementById("fail").innerHTML = "Fail: " + fail;

    setNewVideos();
}
