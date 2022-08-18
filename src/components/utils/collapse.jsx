import React from 'react'
import useCollapse from 'react-collapsed';
import './collapse.css'

export default function Collapse(props) {
    const { getCollapseProps, getToggleProps} = useCollapse();
  return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {props.title}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">   
                {props.content}
            </div>
        </div>
    </div>
  )
}
