import React from 'react';
import '../css/homepage.css';
import Header from './Header';
import FilterBeers from './FilterBeers';

class HomePage extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            beers: [],
            sortBy: 'name'
        };
    }

    sortBeers= sortBy => {
        let { beers } = this.state;

        switch(sortBy) {
            case 'name':
                beers = beers.sort( (beer1, beer2) => {
                    if (beer1.name > beer2.name) return 1;
                    if (beer1.name < beer2.name) return -1;
                });

            break;
            case 'abv':
                beers = beers.sort( (beer1, beer2) => {
                    if (beer1.abv > beer2.abv) return 1;
                    if (beer1.abv < beer2.abv) return -1;
                });

            break;
            default:
        }

        this.setState({beers, sortBy})
    }

    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers")
            .then(res => res.json())
            .then(
                results => {
                    this.setState({
                        isLoaded: true,
                        beers: results
                    });
                    this.sortBeers(this.state.sortBy)
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const { beers } = this.state;

        return(
            <div>
                <Header />
                <FilterBeers beers={beers} sortBeers={this.sortBeers} sortBy={this.state.sortBy}/>
                <div className="container">
                    <div className="beers-list">
                        <div className="row">
                            {beers.map(beer => (
                                <div className="col-md-3 beer-col" key={beer.id}>
                                    <div className="beer-card">
                                        <img src={beer.image_url} alt={beer.name} />
                                        <h3 className="name">{beer.name}</h3>
                                        <span className="abv-show"><span className="abv-label">ABV:</span> {beer.abv}</span>
                                        <a className="more-details" href={ "/beer/" + beer.id}>More Details</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;