import React from 'react'
	class TokenStatus extends React.Component{

		constructor(props){
			super(props);
			this.handleSubmit =this.handleSubmit.bind(this);
			this.state={
				user: ""
			}
		}

		handleSubmit(){
			alert("Token Status");
		}

		render(){
			console.log(this.props.token)
		return(	<div>
				<div className='container'>
					<form onSubmit={(event) => {
        event.preventDefault()
        this.props.tokenStatus(this.refs.user.value)
      }}>
					    Enter Username : <input ref="user" type="text" name="username" /><br/> <br/>
					    <input type="submit" className="btn btn-primary float-right" value="Submit"/>
					 </form>
					 <h2>{this.props.token}</h2>
				</div>
			</div>
			)
		}
	}

	export default TokenStatus