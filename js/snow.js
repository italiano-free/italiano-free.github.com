function rnd(){return Math.random();}
function xRnd(){return (rnd()/10);}
function yRnd(){return (2+2*(.5-rnd()));}
var letitsnow=true;
var flakes=Array("/img/snwflk1.gif","/img/snwflk2.gif","/img/snwflk3.gif","/img/snwflk4.gif");
var numflakes=5;
var GheosTime=50;
var Gheosdx,GheosxPos,GheosyPos,vx,vy,GheosObj,iVar;
var winwidth=640;
var winheight=480;

function sizeIt(){
window.winwidth=window.innerWidth?window.innerWidth:document.body.clientWidth;
window.winheight=window.innerHeight?window.innerHeight:document.body.clientHeight;
}

Gheosdx=new Array();
GheosxPos=new Array();
GheosyPos=new Array();
sway=new Array();
var swaymax=20;
vx=new Array();
vy=new Array();
sizeIt();
document.write('<STYLE TYPE="text/css">\n.flk {position:absolute;top:-100;}<\/STYLE>');
for(iVar=0;iVar<numflakes;iVar++){
	var thisflake=''+flakes[Math.floor(rnd()*flakes.length)];
	Gheosdx[iVar]=0;
	
	GheosxPos[iVar]=rnd()*(window.winwidth-30)+10;
	GheosyPos[iVar]=rnd()*window.winheight;
	sway[iVar]=rnd()*swaymax;
	vx[iVar]=xRnd();
	vy[iVar]=yRnd();
	document.write('<DIV ID="f'+iVar+'" CLASS="flk"><IMG SRC="'+thisflake+'" BORDER="0"><\/DIV>');
}

function snowMove(id,left,top){
	GheosObj=document.getElementById?document.getElementById(id).style:
	document.all?document.all[id].style:
	document.layers?document.layers[id]:null;
	if(GheosObj){
		GheosObj.left=left;
		GheosObj.top=top;
	}
}

function snowSwitch(s){
	if(s=='on'){
		if(window.letitsnow!=true){	
			window.letitsnow=true;
			doSnow();
		}
	} else if(s=='off'){
		window.letitsnow=false;
		hideSnow();
	}
}

function hideSnow(){
for(jVar=0;jVar<numflakes;++jVar)snowMove('f'+jVar,-100,-100);
}

function doSnow(){
if(letitsnow){
	sizeIt();
	delta=(window.pageYOffset!=null)?window.pageYOffset:document.body.scrollTop;
	for(kVar=0;kVar<numflakes;++kVar){
		GheosyPos[kVar]+=vy[kVar];
		if(GheosyPos[kVar]>window.winheight+delta-20){
			GheosxPos[kVar]=rnd()*(window.winwidth-sway[kVar]-30);
			GheosyPos[kVar]=delta;
			vx[kVar]=xRnd();
			vy[kVar]=yRnd();
		}
		Gheosdx[kVar]+=vx[kVar];
		snowMove('f'+kVar,GheosxPos[kVar]+sway[kVar]*Math.cos(Gheosdx[kVar]),GheosyPos[kVar]);
	}
	setTimeout("doSnow()",GheosTime);
  }	
}

function sunshine(){
	snowSwitch('off');
	return false;
}