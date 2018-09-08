import React from 'react'
class AcceptProject extends React.Component{

		constructor(props){
			super(props);
			this.handleSubmit =this.handleSubmit.bind(this);
		}

		handleSubmit(){
			alert("Accepted Project");
		}

		render(){
		return(	<div>
				<div className='container'>
					<form onSubmit={(event) => {
						console.log("this.refs>>>", this.refs.user.value+ "  " +this.refs.projectId.value )
        event.preventDefault()
        this.props.acceptProject(this.refs.user.value,this.refs.projectId.value)
      }}>
					    Enter Username : <input ref="user" type="text" name="username" /> <br/> <br/>
					    Enter ProjectId : <input ref="projectId" type="number" name="project" /> <br/> <br/>
					    <input type="submit" className="btn btn-primary float-right" value="Submit"/>
					 </form>
				</div>
			</div>
			)
		}
	}
export default AcceptProject