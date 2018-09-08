import React from 'react'

	class JoinTeam extends React.Component{

		render(){
		return(	<div>
				<div className='container'>
					<Table1 candidates={this.props.candidates} currentPage={this.props.currentPage} joinTeam={this.props.joinTeam}  user={this.props.user}/>
				</div>
			</div>
			)
		}
	}
 
class Table1 extends React.Component {
  render() {
    return (
      <table class='table'>
        <thead>
          <tr>
            <th>LEADER</th>
            <th>TEAM NAME</th>
          </tr>
        </thead>
        <tbody>
          {this.props.candidates.map((candidate) => {

            
            return(
              <tr>
                <td>{candidate.index[0].toString()}</td>
                <td>{candidate.index[1].toString()}</td>  
                <td><form onSubmit={(event) => {
        event.preventDefault()
        this.props.joinTeam(this.props.user,candidate.index[0].toString())
        this.props.currentPage='myteam'
      }}>
              <input type="submit" className="btn btn-primary float-center" value="JOIN"/>
           </form></td>
              </tr>
            )
          
          })}
        </tbody>
      </table>
    )
  }
}
	export default JoinTeam