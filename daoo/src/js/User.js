import React from 'react'
	class User extends React.Component{

		constructor(props){
			super(props);
			this.handleCheck =this.handleCheck.bind(this);
			this.handleSubmit =this.handleSubmit.bind(this);
			this.state = {
		     checked : false
		    };
		}

		handleCheck(){
			this.setState({checked: !this.state.checked});
		}

		handleSubmit(){
			alert("Submitted ");
		}

		render(){
		return(	<div>
				<div className='container'>
<form onSubmit={(event) => {
        event.preventDefault()
        this.props.addUser(this.refs.user.value,this.refs.address.value,this.state.checked)
      }}>					    Enter Username : <input ref="user" type="text" name="username" /> <br/> <br/>
					    Enter address : <input ref="address" type="text" name="address" /> <br/> <br/>
					    Admin ? <input ref="admin" type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} /><br/> <br/>
					    <input type="submit" className="btn btn-primary float-right" value="Submit"/>
					 </form>
				</div>
			</div>
			)
		}
	}

	export default User