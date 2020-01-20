var title_array = ["Area Of Interests","Title2","Title3"];
var list1 = ["ELEMENT1","ELEMENT2","ELEMENT3","ELEMENT4","ELEMENT5"];	
var list2 = ["ELEMENT2","ELEMENT3","ELEMENT4","ELEMENT5","ELEMENT6"];
var list3 = [];
var i=0;



function ref(){

if(i==0)
{
	document.getElementById("h2text").innerHTML=title_array[0];
	document.getElementById("ele1").innerHTML=list1[0];
	document.getElementById("ele2").innerHTML=list1[1];
	document.getElementById("ele3").innerHTML=list1[2];
	document.getElementById("ele4").innerHTML=list1[3];
	document.getElementById("ele5").innerHTML=list1[4];
}

if(i==1)
{
	document.getElementById("h2text").innerHTML=title_array[1];
	document.getElementById("ele1").innerHTML=list2[0];
	document.getElementById("ele2").innerHTML=list2[1];
	document.getElementById("ele3").innerHTML=list2[2];
	document.getElementById("ele4").innerHTML=list2[3];
	document.getElementById("ele5").innerHTML=list2[4];

}


if(i==2)
{
	document.getElementById("h2text").innerHTML=title_array[2];
	document.getElementById("ele1").innerHTML=list3[0];
	document.getElementById("ele2").innerHTML=list3[1];
	document.getElementById("ele3").innerHTML=list3[2];
	document.getElementById("ele4").innerHTML=list3[3];
	document.getElementById("ele5").innerHTML=list3[4];

}

if(i>3)
{
	i=0;
	ref();
}	

}

function onClickLeft(){
	i--;
	console.log("PRESSED LEFT");
	ref();	
}


function onClickRight(){
	i++;
	console.log("PRESSED Right");
	ref();
}