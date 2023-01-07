import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    /* <Spinner></Spinner> */
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            loading: true,
            page: 1,
            // totalResults:0

        };
    }

    // ComponentDidMount is used to
    // execute the code 
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=aa8d3b7fc3264764b17b01f526e91706&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let json = await data.json();

        this.setState({
            items: json.articles,
            loading: false,
            page: 1,
            totalResults: json.totalResults

        });

        // console.log(this.state.totalResults)
    }

    handlePrevious = async () => {

        let url = `https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=aa8d3b7fc3264764b17b01f526e91706&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let json = await data.json()

        this.setState({
            items: json.articles,
            loading: false,
            page: this.state.page - 1
        });
    }


    handleNext = async () => {

        let url = `https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=aa8d3b7fc3264764b17b01f526e91706&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`

        let data = await fetch(url)

        let json = await data.json()


        this.setState({
            items: json.articles,
            loading: false,
            page: this.state.page + 1
        });
    }


    render() {
        console.log(this.state.totalResults)
        return (

            <div className='my-3 container'>

                {this.state.loading && <Spinner></Spinner>}
                {
                    !this.state.loading && <>
                        <h2 className='text-center'>NewsKitty </h2>
                        <div className='row'>
                            {
                                !this.state.loading && this.state.items.map((item) => {
                                    return (

                                        <div className="col-md-4" key={item.url}>
                                            <NewsItem title={item.title} desc={item.description} img={item.urlToImage} link={item.url}></NewsItem>
                                        </div>



                                    )
                                })
                            }


                            <div className="d-flex justify-content-between">
                                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>

                                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="nextbtn btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                            </div>




                        </div>

                    </>
                }
            </div>
        )
    }
}

export default News