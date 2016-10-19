jest.dontMock("../src/signin.jsx");

describe("SignIn", function() {
	 it("will contain a Sign In button to submit", function() {
	 	var React = require("react/addons");
	 	var SignIn = require("../src/signin.jsx");
	 	var TestUtils = React.addons.TestUtils;

	 	var signin = TestUtils.renderIntoDocument(
	 		<SignIn />;
 		);

 		var username = TestUtils.findRenderedDOMComponentWithTag( signin, "button" );

 		expect( username.getDOMNode().textContent).equalTo("Sign In");

	 });
});