console.log("yo"); // for debugging

var TweetBox = React.createClass({
	getInitialState: function() {
		return {
			text: "",	
			photoAdded: false
		};
	},
	handleChange: function(event) {
		this.setState({ text: event.target.value });
	},
	togglePhoto: function(event) {
		this.setState({ photoAdded: !this.state.photoAdded });
	},
	remainingCharacters: function() {
		if (this.state.photoAdded) {
			return 140 - 23 - this.state.text.length;
		} else {
			return 140 - this.state.text.length;
		}
	},
	overflowAlert() {
		if (this.remainingCharacters() < 0) {
			return (
				<div className="alert alert-warning">
					<strong>Ooops! Too long:</strong>
				</div>
			);
		} else {
			return "";
		}
	},
	render: function() {
		return (
			<div className="well clearfix">

				{ this.overflowAlert() }
				<textarea
					className="form-control" 
					onChange={ this.handleChange }
				></textarea>
				<br/>

				<span>{ this.remainingCharacters() }</span>
				<button
					className="btn btn-primary pull-right" 
					disabled={ this.remainingCharacters() === 140 }
				>Tweet</button>
				<button 
						className="btn btn-default pull-right"
						onClick={ this.togglePhoto }
				>{ this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }</button>

				<br/>
			</div>
		);
	}
});

ReactDOM.render(
	<TweetBox />,
	document.getElementById("container")
);

/*
// Initially disable the button
$("button").prop("disabled", true);

// When the value of the text area changes..
$("textarea").on("input", function() {
	// If there's at least one character..
	if ($(this).val().length >0) {
		// Enable the button
		$("button").prop("disabled", false);
	} else {
		$("button").prop("disabled", true);
	}
});
*/
