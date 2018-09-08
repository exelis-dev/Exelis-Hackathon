import React from 'react'
class CompleteProject extends React.Component{

		constructor(props){
			super(props);
			this.handleSubmit =this.handleSubmit.bind(this);
		}

		handleSubmit(){
			alert("Completed Project");
		}

		render(){
		return(	<div>
				<div className='container'>
<form onSubmit={(event) => {
        event.preventDefault()
        this.props.completeProject(this.refs.projectId.value,this.refs.deadline.value)
      }}>
      					    
					    Enter ProjectId : <input ref="projectId" type="number" name="project" /> <br/> <br/>
					 	Enter Competion date : <input ref="deadline" type="text" name="project" /> <br/> <br/>
					    <input type="submit" className="btn btn-primary float-right" value="Submit"/>
					 </form>
				</div>
			</div>
			)
		}
	}
	export default CompleteProject