import React from 'react'

function ArticleCard(props){
  return (
      <div className={`card ${props.mode}`}>
        <h4>{props.title}</h4>
        <div className="image-wrapper">
          <img className="image" src={props.urlToImage}/>
        </div>
        <p>{props.description}</p>
      <a href={props.url} target="_blank">Click for full article...</a>
      </div>
  )
}

export default ArticleCard