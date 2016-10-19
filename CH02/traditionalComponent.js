var GenericComponent = React.createClass({
	getInitialState: function() {
		return { thing: this.props.thingy };
	},

	getDefaultProps: function() {
		return { thingy: "cheese" }
	}
});
