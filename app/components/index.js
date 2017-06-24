import React, { Component } from "react";
// import Panel from "./common/Panel";
// import QuoteForm from "./common/QuoteForm";
import Users from "../../components/students";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      Users: []
    };
    // Binding getUsers to our component since we'll be passing this
    // method to child components
    this.getUsers = this.getUsers.bind(this);
  }
  // Getting all Users when the component mounts
  componentDidMount() {
    this.getUsers();
  }
  getUsers() {
    Users.getUsers().then((res) => {
      this.setState({ Users: res.data });
    });
  }
  // A helper method for rendering one panel for each quote
  renderUsers() {
    return this.state.Users.map(User => (
      <Panel
        User={users}
        key={Users.id}
        getUsers={this.getUsers}
      />
    ));
  }
  render() {
    return (
      <div className="container">
          {this.renderUsers()}
      </div>
    );
  }
}

export default Index;
