var React = require("react");

// var FormComponent = React.createClass({
// 	render: function() {
// 		return <form>{this.props.children}</form>;
// 	}
// });


// FormComponent.Row = React.createClass({
// 	render: function() {
// 		return <fieldset>{this.props.children}</fieldset>;
// 	}
// });

// FormComponent.Label = React.createClass({
// 	render: function() {
// 		return <label htmlFor={this.props.for}>{this.props.text}{this.props.children}</label>;
// 	}
// });

// FormComponent.Input = React.createClass({
// 	render: function() {
// 		return <input type={this.props.type} id={this.props.id} />;
// 	}
// });

// var Form = FormComponent;
// var App = (
// 	<Form>
// 		<Form.Row>
// 			<Form.Label text="label" for="txt">
// 				<Form.Input id="txt" type="text" />
// 			</Form.Label>
// 		</Form.Row>
// 		<Form.Row>
// 			<Form.Label text="label" for="chx">
// 				<Form.Input id="chx" type="checkbox" />
// 			</Form.Label>
// 		</Form.Row>
// 	</Form>
// );

// React.render(App, document.getElementById("container"));


/* Basic Demo Hello */
// var greeting = {}
// greeting.name = "World";
// greeting.message = "All your base are belong to us.";
// class Hello extends React.Component {
// 	render() {
// 		return ( 
// 			<div>Hello {this.props.name}, {this.props.message}</div>
// 			);
// 	}
// }

// React.render(<Hello {...greeting} />, document.getElementById("container"));

/* For loop example */

// class ListItem extends React.Component {
// 	render() {
// 		return <li>{this.props.text}</li>;
// 	}
// }

// class BigList extends React.Component {
// 	render() {
// 		var items = [ "item1", "item2", "item3", "item4" ];
// 		var formattedItems = [];
// 		for (var i = 0, ii = items.length; i < ii; i++ ) {
// 			var textObj = { text: items[i] };
// 			formattedItems.push(<ListItem {...textObj} />);
// 		}
// 		return <ul>{formattedItems}</ul>;
// 	}
// }

// React.render(<BigList />, document.getElementById("container"));

var SignIn = React.createClass({
	render: function() {
		return <a href="/signin">Sign In</a>;
	}
});

var UserMenu = React.createClass({
	render: function() {
		return <ul className="usermenu"><li>Item</li><li>Another</li></ul>;
	}
});

var userIsSignedIn = true;
var MainApp = React.createClass({
	render: function() {
		return <div>{ userIsSignedIn ? <UserMenu /> : <SignIn /> }</div>;
	}
});

React.render(<MainApp />, document.getElementById("container"));