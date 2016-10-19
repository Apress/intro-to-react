var React = require("react");
var Authentication = require("./auth.jsx");
var WorkoutLog = require("./workoutlog.jsx");

var App = React.createClass({
	getInitialState: function() {
		return { signedIn: false }
	},

	render: function() {
		return (
			<div>{ this.state.signedIn ? <WorkoutLog onLogout={this._onLogout} /> :	<Authentication onAuthComplete={this._onAuthComplete}/> }</div>
		);
	},

	_onAuthComplete: function( result ) {
		// let the child auth components control behavior here
		if (result()) {
			this.setState( { signedIn: true } );
		}
	},

	_onLogout: function() {
		this.setState( { signedIn: false } )
	}


})
React.render(<App/>, document.getElementById("container"));
