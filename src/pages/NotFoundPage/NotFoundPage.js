import React, { Component } from 'react';

class NotFoundPage extends Component{
  render() {
      return (
        <div className="container">
            <div className="alert alert-warning">
                <strong>Không tìm thấy trang</strong>
            </div>
        </div>
      );
    }
}

export default NotFoundPage;