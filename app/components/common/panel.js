import React, { Component } from "react";
import Users from "../../components/students";

class Panel extends Component {
	render() {
		<div className="col-md-3 col-sm-6" onClick="">
        <div className="panel panel-default">
          <div className="panel-body">
            {this.props.Users.avatar_url}
            {this.props.Users.login}
            {this.props.Users.followers}
            {this.props.Users.public_repos}
          </div>
        </div>
      </div>
    );
	}

};

export default Panel;