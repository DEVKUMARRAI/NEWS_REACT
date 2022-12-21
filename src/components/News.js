import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor()
  {
    super();
    this.state={
      articles:[],
      loading:false
    }
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d4a5980bac354f56a4ff62d3095e4702";
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({ articles: parseddata.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Top HeadLines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  pageurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
