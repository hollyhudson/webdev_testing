console.log("yo"); // for debugging

// When the value of the text area changes..
$("textarea").on("input", function() {

	// Update the character count
	if ($(".add-photo-btn").hasClass("is-on")) {
		$("span").text(140 - 23 - $(this).val().length);
	} else {
		$("span").text(140 - $(this).val().length);
	}

	// If there's at least one character..
	if ($(this).val().length > 0) {
		// Enable the button
		$(".tweet-btn").prop("disabled", false);
	} else {
		$(".tweet-btn").prop("disabled", true);
	}
});

$(".add-photo-btn").on("click", function() {
	if ($(this).hasClass("is-on")) {
		$(this)
			.removeClass("is-on")
			.text("Add Photo");
	} else{
		$(this)
			.addClass("is-on")
			.text("✓ Photo Added");
		$("span").text(140 - 23 - $("textarea").val().length);
	
	}
});
