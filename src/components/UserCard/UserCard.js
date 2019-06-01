import React, { Component } from "react";

export class UserCard extends Component {
  render() {
    return (
      <div className="card card-user">
        <div className="content">
          <div className="author">
            <img
              className="avatar border-gray"
              src={this.props.avatar}
              alt="..."
            />
          </div>
          <p className="description text-center">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
