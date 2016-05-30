function changepage(url){
	window.location.href=url;
}

function test(){
	var e = document.getElementById('test');
	if($('#test').hasClass('navbar_section_show')) {
		e.className = "navbar_section_hide";
		e.className += " col-md-8 navbar_section navbar_section_first";
	}
	else{
		e.className = "navbar_section_show";
		e.className += " col-md-8 navbar_section navbar_section_first";
	}
}
