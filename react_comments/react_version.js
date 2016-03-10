console.log("yo");

var TweetBox = React.createClass({
	render: function() {
		return (
			<div>
				Hello World!
			</div>
		);
	}
});

// Render the UI object inside the container
// ReactDOM.render( <UI object />, DOM object );
ReactDOM.render(
	<TweetBox />,
	document.getElementByID("container")
);

