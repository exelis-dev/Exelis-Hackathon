import React from 'react'
class AddProject extends React.Component{

		constructor(props){
			super(props);
			this.handleSubmit =this.handleSubmit.bind(this);
		}

		handleSubmit(){
			alert("Submitted Project");
		}

		render(){
		return(	<div>
				<div className='container'>
					<form onSubmit={(event) => {
        event.preventDefault()
        this.props.addProject(this.props.user,this.refs.name.value,this.refs.deadline.value,this.refs.tokens.value)
      }}>
					    
					    Enter Project : <input ref="name" type="text" name="project" /> <br/> <br/>
					    Enter Token : <input ref="tokens" type="number" name="token" /> <br/> <br/>
					    Enter Deadline : <input ref="deadline" type="text" name="deadline" /> <br/> <br/>
					    <input type="submit" className="btn btn-primary float-right" value="Submit"/>
					 </form>
				</div>
			</div>
			)
		}
	}
	export default AddProject
	