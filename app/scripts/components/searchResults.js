/**
 * This file will hold the Search Results
 * 
 */
import React from 'react';


class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: this.props.searchText,
            searchData: this.props.searchData
        };
    }

    goBack(e) {
        this.props.hideSearchResults()
    }

    render() {
        return (
            <section id="searchResults">
                <div>
                    <span className="see-results-link" onClick={(e) => this.goBack(e)}>{`< Back`}</span>
                </div>
                <div className="search-number">
                    <span>{this.state.searchText.toUpperCase()}</span>
                </div>
                <div className="search-results-header">
                    <h4>SEARCH RESULTS</h4>
                </div>
                <div className="search-results">
                    {
                        this.state.searchData.map(item => {
                            return (
                                <div className="search-result-card">
                                    <div><img src={item.picture} className="product-image" /></div>
                                    <div style={{ textAlign: "center" }}>{item.name.toUpperCase()}</div>
                                    <div>{item.price}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
    }


}

// Export out the React Component
module.exports = SearchResults;