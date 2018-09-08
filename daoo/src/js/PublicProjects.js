import React from 'react'

	class PublicProjects extends React.Component{

		render(){
		return(	<div>
				<div className='container'>
					<Table1 candidates={this.props.candidates}  acceptProject={this.props.acceptProject}  user={this.props.user}/>
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
            <th>ID</th>
            <th>Project</th>
            <th>Tokens</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.props.candidates.map((candidate) => {

            
            if(candidate.index[6].toNumber() === 0 && !candidate.index[4]){
            return(
              <tr>
                <td>{candidate.index[7].toNumber()}</td>
                <td>{candidate.index[1].toString()}</td>  
                <td>{candidate.index[3].toNumber()}</td>
                <td>{candidate.index[2]}</td>
                <td>PENDING</td>
                <td><form onSubmit={(event) => {
        event.preventDefault()
        this.props.acceptProject(this.props.user,candidate.index[7].toNumber())
      }}>
              <input type="submit" className="btn btn-primary float-right" value="ACCEPT"/>
           </form></td>
              </tr>
            )
          }
          })}
        </tbody>
      </table>
    )
  }
}
	export default PublicProjects