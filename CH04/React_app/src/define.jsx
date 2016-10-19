var React = require("react");

var DefineWorkout = React.createClass({
	render: function() {
		return  (
	        <div id="defineWorkouts" >
	        	<h2>Define Workout</h2>
	            <label htmlFor="defineName">Define Name
		            <input type="text" id="defineName" />
	            </label>
	            <label htmlFor="defineType">Define Type
		            <input id="defineType" type="text" />
	            </label>
	            <label htmlFor="defineDesc">Description</label>
	            <textarea id="defineDesc" ></textarea>
	            <button id="saveDefinition">Save Definition</button>
	        </div>
        );
	}
});

module.exports = DefineWorkout;