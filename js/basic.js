var fade_opacity=0.60;

var banners_path="/img/";
var banners=Array(
	"fradiz_banner468x60.gif",
	"corso2_banner468x60.gif",
	"corso_banner468x60.gif",
	"gram_banner468x60.gif"
	);


function load_banner_callback() {
	try {		
		var banner_index=Math.floor(banners.length*Math.random());
		$("#banner").attr("src",banners_path+banners[banner_index]);
		var href_string=window.location.href.substring(0,window.location.href.lastIndexOf("/"))+"/index.html#"+banner_index;
		$("#banner").parent().attr("href",href_string);
	}
	catch(E) {
		
	}
}

function load_banner() {
	try {		
		//$("#banner").fadeTo("fast",0,load_banner_callback());
		//$("#banner").fadeTo("fast",1);
		load_banner_callback()
	}
	catch(E) {
		
	}
}

function change_banner() {
	try {
		if(banners.length>1) {
			var banner_index=Math.floor(banners.length*Math.random());
			$("#banner").slideUp("fast",load_banner_callback());
			$("#banner").slideDown("slow");
		}
	}
	catch(E) {
		
	}
}

$(document).ready(function(){
  try {
		//Banner
		load_banner();
    setInterval("change_banner()",10000);
  }
	catch(E) {
		
	}
	
	try {
		// Links
		$("a:has(img[id!=banner][class!=floatLeft])").fadeTo("fast",fade_opacity);
		$("a:has(img[id!=banner][class!=floatLeft])").hover(
      function () {
        $(this).fadeTo("fast",1);
      }, 
      function () {
        $(this).fadeTo("slow",fade_opacity);
      }
    );
  }
	catch(E) {
		
	}
	
	try {
    // Snow
		var vdate=new Date();
		var vmonth=vdate.getMonth();
		if(vmonth==11 || vmonth==0) {
			$("body").addClass("w");
			setTimeout("sunshine()",30000);
			setTimeout("doSnow()",1000);
		}
		else {
			$("body").addClass("n");
		}
		
	}
	catch(E) {
		
	}
});