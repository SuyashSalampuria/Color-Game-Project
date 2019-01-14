var n=6;
var points=0;
var colors=generate(n);
var squares=document.querySelectorAll(".square");
var heading=document.querySelector(".heading");
var reset=document.querySelector("#just");
var pickedColor=picknew();
var colorDisplay=document.getElementById("colorDisplay");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
easy.addEventListener("click",function(){
	points=0;
	n=3;
	document.querySelector("#points").innerHTML=points;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors=generate(n);
	pickedColor=picknew();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<3;i++)
		squares[i].style.background=colors[i];
	for(var i=3;i<6;i++)
		squares[i].style.background="black";
	heading.style.background="#3c76ae";
});
hard.addEventListener("click",function(){
	points=0;
	n=6;
	document.querySelector("#points").textContent=points;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors=generate(n);
	pickedColor=picknew();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<6;i++)
		squares[i].style.background=colors[i];
	heading.style.background="#3c76ae";
});
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
	
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.background;
		if(clickedColor == pickedColor)
			{ 
				let pr=new Promise(function(resolve,reject){
					points+=2;
				document.querySelector("#points").innerHTML=points;
				changecolors(clickedColor);
				heading.style.background=clickedColor;
				reset.textContent="Play Again?";
				resolve('done');
				});
				
				pr.then(function(fromResolve){if(points==2) alert("Machaya")
				else if(points==1) alert("Nice");
				else alert("Can do better");
				console.log(fromResolve);
			})
		}
		else {
			points-=1;
			document.querySelector("#points").innerHTML=points;
			this.style.background="black";
			
		}
	});
}
reset.addEventListener("click", function(){
	points=0;
	document.querySelector("#points").innerHTML=points;
	colors=generate(n);
	pickedColor=picknew();
	colorDisplay.textContent=pickedColor;
	heading.style.background="#3c76ae";
	for(var i=0;i<n;i++)
	squares[i].style.background=colors[i];
})
function changecolors(color)
{
	for (var i = 0; i < n; i++) {
		squares[i].style.background=color;
	}
}
function picknew()
{
	return colors[Math.floor(n*Math.random())];
}
function generate(x)
{
	var arr=[];
	for(var i=0;i<x;i++)
	{
		arr.push(arrcolor())
	}
	return arr;
}
function arrcolor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}			