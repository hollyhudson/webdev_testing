$(document).ready(function() {
	$("#button").click(function()
	{
		var toAdd = $("input[name=checkListItem]").val();
		$('.list').append('<div class="item">' + toAdd + '</div>');
	});
	
	// $(document).on('event', 'selector', function(){});
	$(document).on('click', '.item', function()
	{
		$(this).remove();
	});
});
