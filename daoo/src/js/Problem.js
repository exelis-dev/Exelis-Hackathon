import React from 'react'

	class Problem extends React.Component{

		render(){
		return(	<div>
				<div className='container'>
					<Table1 addScore1={this.props.addScore1} submitted={this.props.submitted} user={this.props.user} />
				</div>
			</div>
			)
		}
	}


class Table1 extends React.Component {

constructor(props){
  super(props)
  this.handleSubmit1 = this.handleSubmit1.bind(this)
}

handleSubmit1(){
  console.log("refs : "+this.props.user,this.refs.problem.value,this.refs.github.value,this.refs.presentation.value)
  this.props.addScore1(this.props.user,this.refs.problem.value,this.refs.github.value,this.refs.presentation.value)
}

  render() {
    if(!this.props.submitted){
    return (
      <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Number</th>
            <th>Problems</th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <td>1</td>
                <td><p>problem 1 </p></td>  
              </tr>
              <tr>
                <td>2</td>
                <td><p>problem 2 </p></td>  
              </tr>
              <tr>
                <td>3</td>
                <td><p>problem 3 </p></td>  
              </tr>
              <tr>
                <td>4</td>
                <td><p>problem 4 </p></td>  
              </tr>
              
        </tbody>
      </table>


      <form onSubmit={this.handleSubmit1}>
          <div> CHOOSE PROBLEM <input ref="problem" type="number" placeholder="problem number" /></div>
          <div> GITHUB LINK <input ref="github" type="text" placeholder="github link" /></div>
          <div> PRESENTATION LINK <input ref="presentation" type="text" placeholder="ppt link" /></div>                          
                 
        <input type="submit" value="Submit" />
      </form>


      </div>
    )}else{
      return(
          <div>
             <h6> Thanks for Submission , All the best !  </h6>
          </div>
        )
    }
  }
}
 
 export default Problem