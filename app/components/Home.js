import React from 'react';
import SearchResults from './LastFM/SearchResults';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Home';
        this.state = {
            artists: []
        }
    }
    init(searchname){
        if(!searchname){
            return;
        }
        getLastFMArtist(searchname)
        .then(function(data){
            this.setState({
                artists: data.artists
            });
        }.bind(this));
    }
    render() {
        return(
            <div className="row align-justify">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <div className="callout secondary">
                        <a href="https://www.last.fm" target="_blank">
                            <img className="thumbnail" src="img/logos/lastfm_black.png" alt="Last.fm" />
                        </a>
                        <h5>ReactFM</h5>
                        <p>Search Last.fm for a group/artist...</p>
                    </div>                    
                </div>
                <div className="col-sm-4"></div>
            </div>
        )
    }
}

export default Home;