import React from 'react'
import Theme from './Theme'
import Navbar from './Navbar'
import Page from './Page'
import User from './User'
import TokenStatus from './TokenStatus'
import JoinTeam from './JoinTeam'
import MyTeam from './MyTeam'
import Problem from './Problem'
import AMA from './AMA'
import Countdown from 'react-countdown-now';
import NSE from './NSE'


class Content extends React.Component {
  render() {
    return (
      <div>
      <div className="badge badge-light countdown"><Countdown date={1536494400000} daysInHours={true} /></div>
        <h3>Welcome {this.props.user}, </h3> <h3> {this.props.team} SCORE: {this.props.token} </h3>
        <Theme candidates={this.props.candidates}  
        		addUser={this.props.addUser} 
        		token={this.props.token}
            candidates1={this.props.candidates1}
            submitted={this.props.submitted}
            candidates2={this.props.candidates2}
                admin={this.props.admin}
                addScore={this.props.addScore}
                addMarks={this.props.addMarks}
                addScore1={this.props.addScore1}
                database={this.props.database}
                assigned={this.props.assigned}
                team={this.props.team}
                joinTeam={this.props.joinTeam}
                user={this.props.user}
                tokenStatus={this.props.tokenStatus}/>
        <hr/>
        <p> Account: {this.props.account}</p>
        <form onSubmit={this.props.change}>
          <input type="submit" value="LOGOUT" />
        </form>
      </div>
    )
  }
}

export default Content
