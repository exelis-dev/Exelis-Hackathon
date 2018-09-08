import React from 'react'

	class MyTeam extends React.Component{

		render(){
		return(	<div>
				<div className='container'>
					<Table1 candidates1={this.props.candidates1}  user={this.props.user}/>
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
            <th>NAME</th>
            <th>SKILL</th>
          </tr>
        </thead>
        <tbody>
          {this.props.candidates1.map((candidate) => {

            
            return(
              <tr>
                <td>{candidate.index[0]}</td>
                <td>{candidate.index[1]}</td>   
                
              </tr>
            )
          
          })}
        </tbody>
      </table>
    )
  }
}
	export default MyTeam