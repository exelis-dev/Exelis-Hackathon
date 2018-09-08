import React from 'react'

class First extends React.Component{
	      
	     constructor(props){
			super(props);
			this.handleSignUp = this.handleSignUp.bind(this);
			this.handleLogIn = this.handleLogIn.bind(this);			
			this.changer = this.changer.bind(this);
			this.changer1 = this.changer1.bind(this);
			this.state = {
				signup: true,
				login: false
			};
		}

		handleSignUp(){
			this.setState({signup: true , login: false});
		}
		handleLogIn(){
			this.setState({signup: false , login: true});
		}
		changer(user,pass,leader,skill,email,contact,team){
			this.props.change(user,pass,leader,skill,email,contact,team)
		}

		changer1(user,pass){
			this.props.change1(user,pass)
		}
  
		  render(){
		        return (
		              <div id="root1">
		                      <div id="buttons">
		                        <p id="signupButton"  onClick={this.handleSignUp} > Sign Up</p>
		                        <p id="loginButton"  onClick={this.handleLogIn} > Login</p>
		                      </div>
		              
		                   {this.state.signup?<SignUp changer={this.changer}/> : null}
		                   {this.state.login? <Login changer1={this.changer1}/> : null}
		            
		             </div>
		        )
		  	}

	}



	class SignUp extends React.Component{

		
		constructor(props) {
		    super();
		    this.handleSubmit = this.handleSubmit.bind(this);
		    this.handleSubmit1 = this.handleSubmit1.bind(this);
		    this.handleCheck = this.handleCheck.bind(this);
		    this.state = {
		    	checked: false
		    }
		  }

		  handleSubmit() {
		    this.props.changer(this.refs.user.value,this.password.value,this.state.checked,this.refs.skill.value,this.refs.email.value,this.refs.contact.value,"");
		  }

		  handleSubmit1() {
		    this.props.changer(this.refs.user.value,this.password.value,this.state.checked,this.refs.skill.value,this.refs.email.value,this.refs.contact.value,this.refs.team.value);
		  }

		  handleCheck(){
		  	this.setState({checked: !this.state.checked})
		  }
	      
	      render(){
	        	if(this.state.checked){
	            return (
	            
	                  <div>
	                 	<div id="signup">
		                    <form onSubmit={this.handleSubmit1} className="signupform">

		                    	  <div> <label>Leader</label><input  className="adminsignup" type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} /></div>

		                    	  <div> <label>TEAM NAME</label> <input ref="team" type="text" placeholder="team name" /></div>		                    	  

						          <div> <label>NAME</label> <input ref="user" type="text" placeholder="name" /></div>
						          
						          <div> <label>PRIMARY SKILL</label> <input ref="skill" type="text" placeholder="eg. java , python." /></div>
						          
							   	  <div> <label>EMAIL</label> <input ref="email" type="text" placeholder="email-id" /></div> 	
							        
							      <div> <label>CONTACT</label> <input ref="contact" type="text" placeholder="mobile number" /></div>  
						          
						          <div> <label>PASSWORD</label><input ref={x => this.password = x} type="password" placeholder="password" /></div>
						          
						          
						          <input type="submit" value="Submit" />
						    </form>
	            	 	</div>
	                  </div>       
	            )}else{

	            	 return (
	            
	                  <div>
	                 	<div id="signup">
		                    <form onSubmit={this.handleSubmit} className="signupform">
						          
		                    	  <div> <label>Leader</label><input  className="adminsignup" type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} /></div>

								  

						          <div> <label>NAME</label> <input ref="user" type="text" placeholder="name" /></div>
						          
						          <div> <label>PRIMARY SKILL</label> <input ref="skill" type="text" placeholder="eg. java , python." /></div>
						          
							   	  <div> <label>EMAIL</label> <input ref="email" type="text" placeholder="email-id" /></div> 	
							        
							      <div> <label>CONTACT</label> <input ref="contact" type="text" placeholder="mobile number" /></div>  
						          
						          <div> <label>PASSWORD</label><input ref={x => this.password = x} type="password" placeholder="password" /></div>
						          
						          
						          <input type="submit" value="Submit" />
						    </form>
	            	 	</div>
	                  </div>       
	            )

	            }
	      }
	}


	class Login extends React.Component{
	      
		
		constructor(props) {
		    super();
		    this.handleSubmit = this.handleSubmit.bind(this);
		  }

		  handleSubmit() {
		    this.props.changer1(this.refs.user.value,this.refs.pass.value);
		  }


	      render(){
	        
	            return (
	            
	                  <div>
	                 	<div id="login">
						    <form onSubmit={this.handleSubmit} className="loginform">
						          <div> <label>EMAIL ID</label><input ref="user" type="text" placeholder="email" /></div>
						          
						          <div> <label>PASSWORD</label><input ref="pass" type="password" placeholder="password" /></div>
						          
						          <input type="submit" value="Submit" />
						    </form>
	            	 	</div>
	                  </div>       
	            )
	      }
	}


	
export default First