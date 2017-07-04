import React from 'react'

import { pagesInfo } from './helpers'

export default props => {

  const page = pagesInfo(props.pathname)

  if( !page.category ) return null

  return (
    <div className="normalheader transition animated fadeIn">
      <div className="hpanel">
        <div className="panel-body">
          <a className="small-header-action" href="">
            <div className="clip-header">
              <i className="fa fa-arrow-up"></i>
            </div>
          </a>
          <div id="hbreadcrumb" className="pull-right m-t-lg">
            <ol className="hbreadcrumb breadcrumb">
              <li><a href="index.html">Dashboard</a></li>
              <li><span>{ page.category }</span></li>
              <li className="active"><span>{ page.title }</span></li>
            </ol>
          </div>
          <h2 className="font-light m-b-xs">{ page.title }</h2>
          <small>{ page.description }</small>
        </div>
      </div>
    </div>
  )
}
