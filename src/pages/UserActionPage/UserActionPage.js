import React, { Component } from 'react';
import callApi from "../../utils/apiCaller";

class UserActionPage extends Component{
    constructor (props){
        super(props);
        this.state = {
            txtUserName: '',
            txtEmail: '',
            txtTel: '',
            txtPassword: ''
        };
    }

    onChange = (e) =>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    onSave = (e) => {
        e.preventDefault(); // chặn trường hợp load lại trang
        // console.log(this.state);
        var { txtUserName, txtEmail, txtTel, txtPassword } = this.state;
        var {history} = this.props;
        callApi('user/signup', 'POST', {
            userName: txtUserName,
            email: txtEmail,
            password: txtPassword,
            tel: txtTel,
            address: 'Tân Kiểng, Quận 7',
            role: 'member'  
        }).then(res => {
            console.log(res);
            history.goBack('/user-list');
        })
    }

    render() {
        var {txtUserName, txtEmail, txtTel, txtPassword} = this.state;
      return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit = {this.onSave}>
                <div className="form-group">
                    <label htmlFor="txtUserName">Tên:</label>
                    <input type="text" 
                    name="txtUserName" 
                    className="form-control" 
                    placeholder="Nhập tên người dùng..." 
                    value ={txtUserName}
                    onChange={this.onChange}/>
                </div> 
                <div className="form-group">
                    <label htmlFor="txtEmail">Email:</label>
                    <input type="email" 
                    name="txtEmail" 
                    className="form-control" 
                    placeholder="Nhập email.." 
                    value ={txtEmail}
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="txtTel">Tel:</label>
                    <input type="text" 
                    name="txtTel" 
                    className="form-control" 
                    placeholder="Nhập số điện thoại..." 
                    value ={txtTel}
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="txtPassword">Password:</label>
                    <input type="password" 
                    name="txtPassword"  
                    className="form-control" 
                    placeholder="Nhập số Mật khẩu..." 
                    value ={txtPassword}
                    onChange={this.onChange}/>
                </div>
                
                <button type="submit" className="btn btn-large btn-block btn-primary">Save</button>
            </form>
            
        </div>
      );
    }
}

export default UserActionPage;