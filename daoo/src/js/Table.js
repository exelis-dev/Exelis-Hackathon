import React from 'react'

class Table extends React.Component {
  render() {
    return (
      <table class='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Project</th>
            <th>Owner</th>
            <th>Worker</th>
            <th>Tokens</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody >
          {this.props.candidates.map((candidate) => {
            return(
              <tr>
                <th>{candidate.id.toNumber()}</th>
                <td>{candidate.name}</td>
                <td>{candidate.owner}</td>
                <td>{candidate.worker}</td>
                <td>{candidate.tokens.toNumber()}</td>
                <td>{candidate.deadline}</td>
                <td>{candidate.status}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Table
