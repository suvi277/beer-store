import React, { Component } from 'react';
import '../css/filterBeers.css';

class Header extends Component{
    onSort = event => {
        this.props.sortBeers(event.currentTarget.value);
    };

    render() {
        return(
            <div className="container clearfix">
                <div className="filter-beers">
                    <label>Sort By : </label>
                    <select onChange={this.onSort} value={this.props.sortBy}>
                        <option value="name">Name</option>
                        <option value="abv">ABV</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Header;