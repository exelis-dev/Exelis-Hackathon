import React from 'react'
class VerifyProject extends React.Component{

		constructor(props){
			super(props);
			this.handleSubmit =this.handleSubmit.bind(this);
		}

		handleSubmit(){
			alert("Verified Project");
		}

		render(){
		return(	<div>
				<div className='container'>
<form onSubmit={(event) => {
        event.preventDefault()
        this.props.verifyProject(this.refs.projectId.value,this.refs.user.value)
      }}>
      					Enter Username : <input ref="user" type="text" name="username" /> <br/> <br/>
					    Enter ProjectId : <input ref="projectId" type="number" name="project" /> <br/> <br/>
					    <input type="submit" className="btn btn-primary float-right" value="Verify"/>
					 </form>
				</div>
			</div>
			)
		}
	}
	export default VerifyProject