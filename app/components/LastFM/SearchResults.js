import React from 'react';
import LastFM from '../../utils/music';
import Breadcrumbs from '../../utils/Breadcrumbs';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SearchResults';
        this.state = {
            artists: []
        }
    }
    componentDidMount() {
        this.init(this.props.params.searchterm);
    }
    componentWillReceiveProps(nextProps) {
        this.init(nextProps.params.searchterm);
    }
    componentWillUnmount() {
        this.setState({
            artists: []
        });
    }
    init(searchterm){
        LastFM.searchLastFMArtist(searchterm)
            .then(function(results){
                // console.log('searchLastFMArtist > artist ::: ', results.data.results.artistmatches.artist);
                // I want only those with an mbid...
                let filtered = results.data.results.artistmatches.artist.filter(function(o){
                    return o.mbid;
                });
                this.setState({
                    artists: filtered
                });
            }.bind(this));

    }
    handleSubmit(artist){
        this.props.history.pushState(null, '/artist/' + artist.mbid);
    }
    render() {
        if(!this.state.artists.length){
            return (
                <div>
                    <Breadcrumbs links={[]}/>
                    <div className="row">
                        <div className="large-12 columns">
                            <div className="callout secondary">
                                  <h5>Nothing Found</h5>
                                  <p>Sorry, no results from Last.fm</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return(
            <div>
                <Breadcrumbs links={[]}/>
                <div className="row small-up-2 medium-up-3 large-up-5 row-artist">                 
                    {this.state.artists.map((artist, index) => {
                        return (
                            <div className="column" key={index}>
                                <div className="media-object"  >
                                    <div className="media-object-section">
                                        <div onClick={this.handleSubmit.bind(this, artist)} className="thumbnail text-center faked-active">
                                            <image src={artist.image && artist.image[2]['#text'] ? artist.image[2]['#text'] : 'http://placehold.it/174x174'} />
                                            <p>
                                                {artist.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        );
                    })}                    
                </div>
            </div>
        )
    }
}

export default SearchResults;