import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=aa8d3b7fc3264764b17b01f526e91706")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.articles,
                    DataisLoaded: true
                });
            })
    }
 
 
    render() {
    
    return (
      <div className='row container'>
         {
            this.state.items.map((item)=>{
                return(
                <NewsItem title={item.title} desc = {item.description} img={item.urlToImage} link={item.url}></NewsItem>
                )
            })
         }

      </div>
    )
  }
}

export default News