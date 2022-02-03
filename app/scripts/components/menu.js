/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';
import axios from 'axios';
class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor() {
        super();
        this.state = {
            showingSearch: false,
            searchText: '',
            productData: [],
            searchData: []
        };
    }

    componentDidMount() {
        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        axios.get('http://localhost:3035', config)
        .then(response => {
            console.log('response: ', response)
            this.setState({ productData: response.data })
        });
    }

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        e.preventDefault();
        this.setState({
            showingSearch: !this.state.showingSearch
        });
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch(e) {

        // Start Here
        // ...
        let updatedData = []

        if (e.target.value !== '') {
            updatedData = this.state.productData.filter(item => ((item.name).toLowerCase()).includes((e.target.value).toLowerCase()))
        }

        e.preventDefault();
        this.setState({
            searchText: e.target.value.toUpperCase(),
            searchData: updatedData
        });

    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                    <input type="text" onChange={(e) => this.onSearch(e)} value={this.state.searchText.toUpperCase()} />
                    <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                        <i className="material-icons close">close</i>
                    </a>
                    {this.state.searchText.length > 0 &&
                        <div>
                            {
                                this.state.searchData.length > 0 ?
                                    <div className="search-results">
                                        {
                                            this.state.searchData.map(item => {
                                                return (
                                                    <div className="search-result-card">
                                                        <div><img src={item.picture} className="product-image" /></div>
                                                        <div>{item.name}</div>
                                                        <div>{item.price}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    : <span>
                                        No Products Found
                                    </span>
                            }
                        </div>
                    }
                </div>
            </header>
        );
    }


}

// Export out the React Component
module.exports = Menu;