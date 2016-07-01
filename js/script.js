var height = $(window).height();
var width = $(window).width();
var weirdColour;

$(document).ready(function(){
	$(".weird").each(function()
		{
			positionShape(this)
		});
	$(".content-item").hover(function() {
		$(".content-text").fadeIn(500);
	}, function(){
		$(".content-text").fadeOut(500);
	})

	$(".title").click(function(){
		showContact();
	})
	$(".contact").click(function(){
		$(".contact").fadeOut(500);
	})
})

function moveShape(shape, position){
	$(shape).animate({
    left: "+=" + (width + position)
  }, 20000,"linear", function() {
  	positionShape(shape)
  });
};

function positionShape(shape){
	var randomHeight = Math.floor((Math.random() * height));
	var randomWidth = Math.floor((Math.random() * width) + 100);
	$(shape).css({top:randomHeight,left:-randomWidth});
	randomColour();
	$(".weird").css("background-color",weirdColour);
	$(".weird").each(function()
		{
			moveShape(this,randomWidth)
		});
}

function randomColour(){
	var randColour = Math.floor(Math.random()*3);
	if (randColour == 0)
	{
		weirdColour = "#0133F2";
	} else if (randColour == 1)
	{
		weirdColour = "#89D3E0";
	} else if (randColour == 2)
	{
		weirdColour = "#F9C6D9"
	}
}

function showContact(){
	$(".contact").fadeIn(500);
}