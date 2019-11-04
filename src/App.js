import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    articles: articles,
    style: 'cards',
    mode: 'light',
    expanded: false
  }

  renderArticles = () => {
    return this.state.articles.map(article => {
      if (this.state.style === 'cards') {
      return <ArticleCard 
        key={article.id} 
        title={article.title}
        url={article.url}
        urlToImage={article.urlToImage}
        description={article.description}
        mode={this.state.mode}
      />
      } else if (this.state.style === 'list') {
        return <ArticleItem 
          key={article.id} 
          id={article.id}
          title={article.title}
          url={article.url}
          urlToImage={article.urlToImage}
          description={article.description}
          mode={this.state.mode}
          expanded={this.state.expanded}
          toggleExpanded={this.toggleExpanded}
        />
      }
    })
  }

  toggleExpanded = (id) => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  handleClickStyle = () => {
    this.setState({
      style: this.state.style === 'cards' ? 'list' : 'cards'
    })
  }

  handleClickMode = () => {
    this.setState({
      mode: this.state.mode === 'light' ? 'dark' : 'light'
    })
  }

  render(){
    return (
      <div className={this.state.mode}>
        <button onClick={this.handleClickMode}>{this.state.mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</button>
        <button onClick={this.handleClickStyle}>{this.state.style === 'cards' ? 'Switch to List View' : 'Switch to Card View'}</button>
        <div className={this.state.style}>
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default App;
