import React from 'react'
import User from './User'
import AddProject from './AddProject'
import JoinTeam from './JoinTeam'
import MyTeam from './MyTeam'
import Problem from './Problem'
import AMA from './AMA'
import NSE from './NSE'


	class Page extends React.Component{

		render(){
		return(	<div>
				<div className='container'>
					
					{(() => {
				        switch (this.props.currentPage) {
				          case "home":   return <User addUser={this.props.addUser} />;
				          case "about": return <AddProject addProject={this.props.addProject} user={this.props.user}/>;
				          case "contact": return <AcceptProject acceptProject={this.props.acceptProject}/>;
				          case "completeProject": return <CompleteProject completeProject={this.props.completeProject} user={this.props.user}/>;
				          case "verifyProject": return <VerifyProject verifyProject={this.props.verifyProject} />;
				          case "projectAdminStatus": return <ProjectAdminStatus verifyProject={this.props.verifyProject} user={this.props.user} candidates={this.props.candidates} />;
				          case "projectStatus": return <ProjectStatus candidates={this.props.candidates} />;
				          case "myProjects": return <MyProjects candidates={this.props.candidates} user={this.props.user}/>;
				          case "publicProjects": return <PublicProjects acceptProject={this.props.acceptProject} user={this.props.user} candidates={this.props.candidates} />;
				          case "problem": return <Problem user={this.props.user} submitted={this.props.submitted} addScore1={this.props.addScore1}/>;
				          case "myteam": return <MyTeam user={this.props.user} currentPage={this.props.currentPage} team={this.props.team} candidates1={this.props.candidates1}/>;
				          case "jointeam": return <JoinTeam user={this.props.user} candidates={this.props.candidates} joinTeam={this.props.joinTeam}/>;
				          case "ama": return <AMA user={this.props.user} addScore={this.props.addScore} database={this.props.database} team={this.props.team}/>;
				          case "nse": return <NSE candidates2={this.props.candidates2} addMarks={this.props.addMarks} user={this.props.user}/>;
				          
				        
				    	}
				    })()}
					 
				</div>
			</div>
			)
		}
	}
export default Page