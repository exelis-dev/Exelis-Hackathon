import React from 'react'
import Navbar from './Navbar'
import Page from './Page'
class Theme extends React.Component{

		constructor(props){
			super(props);
			this.handleChange = this.handleChange.bind(this);
			if(this.props.user == "exelis")
			{
				this.state = {
		     		currentPage : 'nse'
		 		}
		    }
		    else{
				this.state = {
			 	    currentPage : 'problem'
			    }
			}
		    
		}

		handleChange(page){
			this.setState({currentPage: page});
		}
		

		render(){
		return(	<div>
				<Navbar currentPage={this.state.currentPage} user={this.props.user} assigned={this.props.assigned} adminProj={this.props.adminProj} admin={this.props.admin} brand='EXELIS' change={this.handleChange} />
				<Page currentPage={this.state.currentPage} 
					candidates={this.props.candidates}
					token={this.props.token}
					addUser={this.props.addUser} 
					candidates1={this.props.candidates1}
					addScore={this.props.addScore}
	                addScore1={this.props.addScore1}
	                addMarks={this.props.addMarks}
	                candidates2={this.props.candidates2}
	                submitted={this.props.submitted}
					team={this.props.team}
					database={this.props.database}
					user={this.props.user}
					joinTeam={this.props.joinTeam}
					admin={this.props.admin}
					tokenStatus={this.props.tokenStatus}/>
			</div>
			)
		}
	}
export default Theme