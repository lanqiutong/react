import React, { Component } from 'react';
import { connect } from "dva";
import { NavLink } from 'dva/router';
import "../styles/login.less";

 class Login extends Component {
   constructor(){
     super();
     

   }
  
   login(){
    this.props.login({"username":this.refs.name.value,"password":this.refs.password.value})
   }
  render() {
    var username = sessionStorage.getItem('username');
    return (
      <div className="login">
        <div className="img"><img src="../images/1419183857609652289.jpg"/></div>
        {!username?(<div className="input">
          <p>用户名:<input type="text" ref="name"/></p>
          <p>密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" ref="password"/></p>
          <p><input type="submit" value="登录" onClick={()=>this.login()}/></p>
          <NavLink to="/regist"><span>免费注册</span></NavLink>
        </div>) : (<div>您已经登录</div>)}
        <div className="cl"></div>
      </div>
    )
  }
}
export default connect(
 ({login:{username,islogin}})=>({
    username,
    islogin

  }), 
  (dispatch) => ({
    login(obj){
      
      dispatch({"type":"login/login",obj})
    }
  })

)(Login)