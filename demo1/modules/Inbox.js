import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Inbox</h1>
        <ul>
        <li><Link to="inbox/messages/98ji">Message1</Link></li>
        <li><Link to="inbox/messages/99ji">Message2</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
