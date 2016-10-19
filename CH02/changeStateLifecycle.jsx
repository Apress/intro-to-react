// Lifecycle during change of state
var GenericComponent = React.createClass({

    // First
    shouldComponentUpdate: function() {
    },

    // Next
    componentWillUpdate: function() {
    },

    // render
    render: function() {
        return ( <h1>Hello World!</h1> );
    },

    // Finally
    componentDidUpdate: function() {
    }
});
