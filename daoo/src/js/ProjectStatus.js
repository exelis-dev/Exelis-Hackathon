import React from 'react'

	class ProjectStatus extends React.Component{

		render(){
		return(	<div>
				<div className='container'>
					<Table candidates={this.props.candidates} />
				</div>
			</div>
			)
		}
	}
 
class Table extends React.Component {
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
            if(candidate.index[8]){
              return(
                <tr>
                 <td>{candidate.index[7].toNumber()}</td>
                  <td>{candidate.index[1].toString()}</td>  
                  <td>{candidate.index[3].toNumber()}</td>
                  <td>{candidate.index[2]}</td>
                  <td>VERIFIED</td>
                </tr>
              )
            }
            if(candidate.index[6].toNumber() === 0 && candidate.index[4]){
            return(
              <tr>
                <td>{candidate.index[7].toNumber()}</td>
                <td>{candidate.index[1].toString()}</td>  
                <td>{candidate.index[3].toNumber()}</td>
                <td>{candidate.index[2]}</td>
                <td>ACCEPTED</td>
              </tr>
            )
          }else if(candidate.index[6].toNumber() === 1 && candidate.index[4]){
            return(
              <tr>
                <td>{candidate.index[7].toNumber()}</td>
                <td>{candidate.index[1].toString()}</td>  
                <td>{candidate.index[3].toNumber()}</td>
                <td>{candidate.index[2]}</td>
                <td>COMPLETED</td>
              </tr>
            )
          }else{
              return(
                <tr>
                  <td>{candidate.index[7].toNumber()}</td>
                  <td>{candidate.index[1].toString()}</td>  
                  <td>{candidate.index[3].toNumber()}</td>
                  <td>{candidate.index[2]}</td>
                  <td>PENDING</td>
                </tr>
              )
          }
          })}
        </tbody>
      </table>
    )
  }
}
	export default ProjectStatus