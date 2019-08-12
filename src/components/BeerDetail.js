import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router'
import NotFound from './NotFound';
import Loader from './Loader';
import '../css/beerDetail.css';

class BeerDetail extends Component{

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            beer: []
        };
    }

    componentDidMount() {
		const { params } = this.props.match;

        fetch("https://api.punkapi.com/v2/beers/" + params.beerId)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        beer: result
                    })
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render(props) {
        const { error, isLoaded, beer } = this.state;

        if (error) {
            return <dNotFound/>
        } else if (!isLoaded) {
            return <Loader />;
        } else {
            const beerDetail = beer[0]

            return (
            	<div>		
                	<Header />
                	<div className="container">	
	                	<a class="back-link" href="/">Back to Home Page </a>
		                <div className="beer clearfix">
	                        <h1>Beer {beerDetail.name}</h1>
	                    	<div className="beer-img">
	                    		<img src={beerDetail.image_url} alt={beerDetail.name} />
	                    	</div>
	                    	<div className="beer-details">
	                    		<div className="abv-detail"><strong>ABV</strong> : {beerDetail.abv} </div>
		                        <span className="tagline">{beerDetail.tagline}</span>
		                        <p className="desc">{beerDetail.description}</p>
	                        </div>
		                </div>
	                </div>
                </div>
            );
        }
    }
}
export default BeerDetail