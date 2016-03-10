console.log("yo");
// Initially disable the button
$("button").prop("disabled", true);

// When the value of the textarea changes...
$("textarea").on("input", function()
{
	// if there is at least one character...
	if ($(this).val().length > 0) {
		// Enable the button
		$("button").prop("disabled", false);
	} else {
		// Else, disable the button
		$("button").prop("disabled", true);
	}
});
