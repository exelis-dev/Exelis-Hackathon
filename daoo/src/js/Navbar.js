import React from 'react'
	class Navbar extends React.Component{

		constructor(props){
			super(props);
			this.change = this.change.bind(this);
		}

		change(page){
			this.props.change(page);
		}

		render(){

		if(this.props.user == "exelis"){
			return(	<nav className='navbar navbar-default'>
				<div className='container'>
					<div className='navbar-header'>
						<a className='navbar-brand' href='#'>{this.props.brand}</a>
					</div>
					<div id='navbar'>
						<ul className='nav'>
							
							<li className={(this.props.currentPage === 'nse') ? 'active' : ''}><a onClick={this.change.bind(this,'nse')} href='#'>TEAMS </a></li>
							
						</ul>	
					</div>	
				</div>
			</nav>
			)

		}

		if(this.props.admin){	
		return(	<nav className='navbar navbar-default'>
				<div className='container'>
					<div className='navbar-header'>
						<a className='navbar-brand' href='#'>{this.props.brand}</a>
					</div>
					<div id='navbar'>
						<ul className='nav'>

							<li className={(this.props.currentPage === 'myteam') ? 'active' : ''}><a onClick={this.change.bind(this,'myteam')} href='#'>MY TEAM</a></li>

							
							
							<li className={(this.props.currentPage === 'problem') ? 'active' : ''}><a onClick={this.change.bind(this,'problem')} href='#'>PROBLEM STATEMENTS</a></li>

							<li className={(this.props.currentPage === 'ama') ? 'active' : ''}><a onClick={this.change.bind(this,'ama')} href='#'>DISCUSSIONS</a></li>
							
						</ul>	
					</div>	
				</div>
			</nav>
			)}else if(this.props.assigned){
			return(	<nav className='navbar navbar-default'>
				<div className='container'>
					<div className='navbar-header'>
						<a className='navbar-brand' href='#'>{this.props.brand}</a>
					</div>
					<div id='navbar'>
						<ul className='nav'>
							
							<li className={(this.props.currentPage === 'myteam') ? 'active' : ''}><a onClick={this.change.bind(this,'myteam')} href='#'>MY TEAM</a></li>
							<li className={(this.props.currentPage === 'problem') ? 'active' : ''}><a onClick={this.change.bind(this,'problem')} href='#'>PROBLEM STATEMENTS</a></li>
							<li className={(this.props.currentPage === 'ama') ? 'active' : ''}><a onClick={this.change.bind(this,'ama')} href='#'>DISCUSSIONS</a></li>
							
						</ul>	
					</div>	
				</div>
			</nav>
			)
		}else{
			return(	<nav className='navbar navbar-default'>
				<div className='container'>
					<div className='navbar-header'>
						<a className='navbar-brand' href='#'>{this.props.brand}</a>
					</div>
					<div id='navbar'>
						<ul className='nav'>
							
							<li className={(this.props.currentPage === 'jointeam') ? 'active' : ''}><a onClick={this.change.bind(this,'jointeam')} href='#'>JOIN TEAM</a></li>
							<li className={(this.props.currentPage === 'problem') ? 'active' : ''}><a onClick={this.change.bind(this,'problem')} href='#'>PROBLEM STATEMENTS</a></li>
							<li className={(this.props.currentPage === 'ama') ? 'active' : ''}><a onClick={this.change.bind(this,'ama')} href='#'>DISCUSSIONS</a></li>
							
						</ul>	
					</div>	
				</div>
			</nav>
			)
		}
		}
	}
	export default Navbar