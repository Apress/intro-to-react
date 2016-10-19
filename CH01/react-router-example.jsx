var App = React.createClass({
  getInitialState: function() {
  },
  render: function () {
    return (
      <div>
          <ul>
            <li><Link to="main">Demographics</Link></li>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="messages">Messages</Link></li>
          </ul>
          <UserSelect />
        </div>

        <RouteHandler name={this.state.name}/>
      </div>
    );
  }
});

var routes = (
  <Route name="main" path="/" handler={App}>
    <Route name="profile" handler={Profile}/>
    <Route name="messages" handler={Messages}/>
    <DefaultRoute handler={ Demographics }/>
  </Route>
);

Router.run(routes, function (Handler, state) {
  React.render(<Handler />, document.getElementById("content"));
});
