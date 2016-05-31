window.onload = function() {
    var oDiv = document.getElementById("course_list");
    var aC = document.getElementById("content_list");
    var oCDiv = document.getElementById("id_select_course");

    var oLid = oDiv.getElementsByTagName("div");
    var aCond = aC.getElementsByTagName("div");

    var oLi = oDiv.getElementsByTagName("div")[0].getElementsByTagName("a");
    /*var aCon = aC.getElementsByTagName("div")[0].getElementsByTagName("h3");*/
    var aCDivaa = oCDiv.getElementsByTagName("div")[0].getElementsByTagName("a");

    var timer = null;

   /*for (var i = 0; i < oLi.length; i++) {

        oLi[i].index = i;
        oLi[i].onclick = function() {
            show(this.index);
        }
    }*/

    for (var i = 0; i < aCDivaa.length; i++){
    	aCDivaa[i].index = i;
    	aCDivaa[i].onclick = function() {
    		show1(this.index);
    	}	
    }

    function show1(b){
    	index = b;
    	initcontent = (oDiv.getElementsByTagName("div")[b].getElementsByTagName("a"))[0];
    	showcontent(initcontent);
    	for(var j = 0; j < aCDivaa.length;j++){
    		oLid[j].className = "hide";
    		for(var k = 0; k < aCond.length;k++){
    			aCond[k].className = "hide";
    		}
    	}
    		oLid[index].className = "";
    		/*aCond[index].className = "";*/
    }







    /*function show(a) {
        index = a;
        var alpha = 0;
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].className = "";
            aCon[j].className = "";
            aCon[j].style.opacity = 0;
            aCon[j].style.filter = "alpha(opacity=0)";
        }
        oLi[index].className = "cur";
        aCon[index].className = "cur";
        clearInterval(timer);
        timer = setInterval(function() {
            alpha += 2;
            alpha > 100 && (alpha = 100);
            aCon[index].style.opacity = alpha / 100;
            aCon[index].style.filter = "alpha(opacity=" + alpha + ")";
            alpha == 100 && clearInterval(timer);
        },
        5)

    }*/
}







function changepage(url){
	window.location.href=url;
}

/*function test(){
	var e = document.getElementById('test');
	if($('#test').hasClass('navbar_section_show')) {
		e.className = "navbar_section_hide";
		e.className += " col-md-8 navbar_section navbar_section_first";
	}
	else{
		e.className = "navbar_section_show";
		e.className += " col-md-8 navbar_section navbar_section_first";
	}
}*/


function showcontent(whichcontent){
	var text = whichcontent.getAttribute("title");
	var content = document.getElementById("h1");
	content.firstChild.nodeValue = text;
}


