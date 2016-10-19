var React = require("react");

var CreateAccount = React.createClass({
	render: function() {
		return ( 
			<div>
		        <label htmlFor="username">Username:
			        <input type="text" id="username" />
		        </label>
		        <label htmlFor="password">Password:
			        <input type="text" id="password" />
		        </label>
		        <label htmlFor="password">Confirm Password:
			        <input type="text" id="confpassword" />
		        </label>
		        <button id="signIn" onClick={this.props.onAuthComplete.bind( null, this._createAccount)}>Create Account</button>
			</div>
		);
	},

	_createAccount: function() {
		// do creation logic here
		return true;
	}
});

module.exports = CreateAccount;