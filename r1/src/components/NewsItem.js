import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
  render() {
const {title,desc} = this.props;
    return (
    


    <div className="card col-md-4" style={{width: "18rem"}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
 
    )
  }
}

export default NewsItem