/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';
import SearchResults from './components/searchResults'


/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */

    constructor(props) {
        super(props);
        this.state = {
            showSearchResults: false,
            searchText: "",
            searchData: []
        };

        this.seeSearchResults = this.seeSearchResults.bind(this)
        this.hideSearchResults = this.hideSearchResults.bind(this)
    }

    seeSearchResults(searchText, searchData) {
        console.log('searchText :>> ', searchText);
        console.log('searchData :>> ', searchData);
        this.setState({
            showSearchResults: true,
            searchText: searchText,
            searchData: searchData
        })
    }

    hideSearchResults() {
        this.setState({showSearchResults: false,
            searchText: "",
            searchData: []
        })
    }

    render() {
        return (
            <div className="App">
                <Menu seeSearchResults={this.seeSearchResults} />
                {this.state.showSearchResults ?
                    <SearchResults searchText={this.state.searchText}
                        searchData={this.state.searchData} 
                        hideSearchResults={this.hideSearchResults}
                        />
                    : <Home />
                }
            </div>
        );
    }

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
