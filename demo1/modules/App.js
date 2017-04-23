import React from 'react'
import {Link, IndexLink} from 'react-router'


export default React.createClass({
  render() {
    return (
      <div>
        <h1>Hello App</h1>
        <ul>
          <li><Link to="/" activeStyle={{color:'red'}}  onlyActiveOnIndex={true}>Home_app</Link></li>
          <li><Link to="/about" activeStyle={{color:'red'}}>About_app</Link></li>
          <li><Link to="/inbox" activeStyle={{color:'red'}}>Inbox_app</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})
