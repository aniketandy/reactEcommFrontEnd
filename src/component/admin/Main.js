import React ,{Component} from 'react';
//import logo from '../logo.svg';
import './Main.css';
import Api from '../Api';
class Main extends Component {
   constructor(props){
     super(props)
     this.state ={
       userName : '',
       password : ''
     }
   }
   login=()=> {
     let self = this;
     var userName = this.state.userName;
     var password = this.state.password;
     if(userName!='' && password!=''){
        Api.auth(userName,password).then(result =>{
          self.props.history.push('/adminProducts');
          },err=>{
        })
          
     }else{
       alert('Please enter valid username or password');
     }
   }
  render() {
    return (
      <div className="App">
        <p>Admin Login</p>

    <div className="loginForm">
        <input type="text" placeholder="Enter Username" onChange={(evt)=>{this.setState({userName : evt.target.value})}} />
        <input type="password" placeholder="Enter Password" name="psw" required  onChange={(evt)=>{this.setState({password : evt.target.value})}}/>
        <button type="submit" onClick={this.login}>Login</button>
    </div>
    


  
        
      </div>
    );
  }
}

// const Home = ()=>{
//       return(
//               <div>
                   
//                    <p>Home Page</p>
//               </div>
//       );
// };
export default Main;
