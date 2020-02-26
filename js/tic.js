var imno = 0;
//var mts = document.getElementsByClassName(mts);
var xx=["0","0","0","0","0","0","0","0","0"];
var x1=0;
var o1=0;
function checkprint(num){
	if(num==1){
		window.alert("The player with X won");
		var i=0;
		for(;i<8-imno;i++){
			document.getElementsByClassName("mts")[i].onclick=function(){
				return false;
			}
		}

	}

	if(num==2){
		window.alert("The player with O won");
	}

}
function Check(){
	if (xx[0]==xx[3]&&xx[3]==xx[6])
		checkprint(xx[0]);
	if (xx[1]==xx[4]&&xx[4]==xx[7])
		checkprint(xx[1]);
	if (xx[2]==xx[5]&&xx[5]==xx[8])
		checkprint(xx[8]);
	if (xx[0]==xx[1]&&xx[1]==xx[2])
		checkprint(xx[1]);
	if (xx[3]==xx[4]&&xx[4]==xx[5])
		checkprint(xx[4]);
	if (xx[6]==xx[7]&&xx[7]==xx[8])
		checkprint(xx[6]);
	if (xx[0]==xx[4]&&xx[4]==xx[8])
		checkprint(xx[0]);	
	if (xx[2]==xx[4]&&xx[4]==xx[6])
		checkprint(xx[2]);
}
function Play(cell,cellno){
	imno += 1;
	var butt= cell.childNodes[1];
	butt.remove();
	if(imno%2==1)
	{
		xx[cellno] = 1;
		var imgx= document.createElement("img");
		imgx.src="images/x.png";
		cell.appendChild(imgx);
	}
	else
	{
		xx[cellno] = 2;
		var imgo= document.createElement("img");
		imgo.src="images/o.png";
		cell.appendChild(imgo);
	}
	Check();

}
function reset(){
	window.location.reload();
}
