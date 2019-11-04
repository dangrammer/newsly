import React from 'react'

function ArticleItem(props){
  return (
    <div className={`item ${props.mode}`} onClick={props.toggleExpanded}>
      <strong>{props.title}</strong>
      {props.expanded ? 
        <>
          <p>{props.description}</p>
          <a href={props.url}>Read Full Article</a>
        </> :
          null}
    </div>
  )
}

export default ArticleItem