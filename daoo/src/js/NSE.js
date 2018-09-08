import React from 'react'

	class NSE extends React.Component{

		render(){
		return(	<div>
				<div className='container'>
					<Table1 candidates1={this.props.candidates2} user={this.props.user} addMarks={this.props.addMarks} />
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
            <th>TEAM</th>
            <th>PROBLEM</th>
            <th>GIT</th>
            <th>PPT</th>            
          </tr>
        </thead>
        <tbody>
          {this.props.candidates1.map((candidate) => {

            
            return(
              <tr>
                <td>{candidate.index[0].toString()}</td>
                <td>{candidate.index[1].toNumber()}</td>   
                <td>{candidate.index[2].toString()}</td>
                <td>{candidate.index[3].toString()}</td> 
                <td><form onSubmit={(event) => {
        event.preventDefault()
        this.props.addMarks(this.props.user,this.refs.marks.value)
      }}> 
              <input type="text"  ref="marks"/>
              <input type="submit" className="btn btn-primary float-center" value="SUBMIT"/>
           </form></td>
              </tr>
            )
          
          })}
        </tbody>
      </table>
    )
  }
}
	export default NSE