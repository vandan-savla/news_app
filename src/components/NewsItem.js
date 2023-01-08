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
    const { title, desc, img, link } = this.props;
    return (


      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={link} target="_blank" className="btn btn-primary">Link To news</a>
          </div>
        </div>
      </div>

    )
  }
}

export default NewsItem