// Lifecycle During Initial Render
var GenericComponent = React.createClass({
    // Invoked first
    getInitialProps: function() {
	return {};
    },
    
    // Invoked Second
    getInitialState: function() {
	return {};
    },

    // Third
    componentWillMount: function() {
    },

    // Render – Fourth
    render: function() {
        return ( <h1>Hello World!</h1> );
    },
 
    // Lastly
    componentDidMount: function() {
    }
});
