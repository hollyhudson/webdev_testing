$(document).ready(function()
{
	/** Do now solution: ************
	var i = 0;
	$('button').click(function()
	{
		console.log(i);
		i = i + 1;
		if(i > 9) alert("Stop clicking me");
	});
	*********************************/
	$('#message').focus();

	// YOUR CODE GOES HERE
	$('#post-btn').click(function()
	{
		var new_post = "<p>test message</p>";
		$('body').append(new_post);
	});
});

$(document).ready(function(){
    $("#one").after("<p>Any text.</p>");
	$("#two").after($("p"));
});
