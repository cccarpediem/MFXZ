window.onload = function() {
    var oDiv = document.getElementById("course_list");
    var aC = document.getElementById("content_list");
    var oCDiv = document.getElementById("id_select_course");

    var oLid = oDiv.getElementsByTagName("div");
    var aCond = aC.getElementsByTagName("div");

    var oLi = oDiv.getElementsByTagName("div")[0].getElementsByTagName("a");
    var aCDivaa = oCDiv.getElementsByTagName("div")[0].getElementsByTagName("a");
    initlist = oDiv.getElementsByTagName("div")[0].getElementsByTagName("a");
    showcontent(initlist[0]);

    for (var i = 0; i < aCDivaa.length; i++){
        aCDivaa[i].index = i;
        aCDivaa[i].onclick = function() {
            show1(this.index);
        }   
    }

    function show1(b){
        index = b;
        for(var l = 0; l < aCDivaa.length; l++){
            aCDivaa[l].className = "";
            }
        initcontent = (oDiv.getElementsByTagName("div")[b].getElementsByTagName("a"))[0];
        initlist = oDiv.getElementsByTagName("div")[b].getElementsByTagName("a");
        showcontent(initcontent);
        for(var j = 0; j < aCDivaa.length;j++){
            oLid[j].className = "hide";
            for(var k = 0; k < aCond.length;k++){
                aCond[k].className = "hide";
            }
        }  
            initlist[0].className="show1";
            aCDivaa[b].className = "show1";
            oLid[index].className = "";
    }
}


function showcontent(whichcontent){
    for(var ii = 0; ii < initlist.length; ii++){
            initlist[ii].className="";
    }
    whichcontent.className="show1";
    var text = whichcontent.getAttribute("src");
    var content = document.getElementById("h1");
    content.src = text;
}


