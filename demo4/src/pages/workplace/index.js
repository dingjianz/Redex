import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

import GetUp from './GetUp'
import Money from './Money'

function WorkPlace() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/Money">程序员加薪秘籍</Link></li>
          <li><Link to="/workplace/GetUp">程序员早起攻略</Link></li>
        </ul>
      </div>

      <div className="videoContent">
        <div><h3>职场软技能</h3></div>
        <Redirect to="/workplace/Money"></Redirect>
        <Route path="/workplace/Money" component={Money}></Route>
        <Route path="/workplace/GetUp" component={GetUp}></Route>
      </div>
    </div>
  )
}

export default WorkPlace