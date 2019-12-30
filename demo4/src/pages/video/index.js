import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

import ReactPage from './ReactPage'
import Flutter from './Flutter'
import Vue from './Vue'

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/reactpage">React教程</Link></li>
          <li><Link to="/video/Flutter">Flutter教程</Link></li>
          <li><Link to="/video/Vue">Vue教程</Link></li>
        </ul>
      </div>

      <div className="videoContent">
        <div><h3>视频教程</h3></div>
        <Redirect to="/video/reactpage"></Redirect>
        <Route path="/video/reactpage" component={ReactPage}></Route>
        <Route path="/video/Flutter" component={Flutter}></Route>
        <Route path="/video/Vue" component={Vue}></Route>
      </div>
    </div>
  )
}

export default Video