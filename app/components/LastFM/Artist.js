import React from 'react';
import LastFM from '../../utils/music';
import Breadcrumbs from '../../utils/Breadcrumbs';
import Albums from './Albums';
import Similar from './Similar';

class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Artist';
        this.state = {
            artist: {},
            albums: []
        }
    }
    componentDidMount() {
        this.init(this.props.params.mbid);
    }
    componentWillReceiveProps(nextProps) {
        this.init(nextProps.params.mbid);
    }
    init(mbid){
        LastFM.getAllArtist(mbid)
            .then(function(result){
                console.log('getAllArtist ::: ', result);
                this.setState({
                    artist: result.artist,
                    albums: result.albums
                });
            }.bind(this));
    }
    getSimilar(artist){
        LastFM.getSimilarArtist(artist)
            .then(function(result){
                if(result.data.artist.mbid){ // some results do not have the mbid...or maybe not for similar suggested artists?
                    this.props.history.pushState(null, '/artist/' + result.data.artist.mbid);
                } else {
                    this.props.history.pushState(null, '/results/' + encodeURIComponent(artist));
                }
            }.bind(this), function(reason){
                console.log('Error ::: ', reason);
            });

        // LastFM.getAllArtistByName(artist)
        // .then(function(result){
        //     console.log('THE FINAL RESULT! ', result);
        // }.bind(this), function(reason){
        //     console.log('Error ::: ', reason);
        // });
    } 
    getAlbumInfo(albummbid){
        this.props.history.pushState(null, '/artist/' + this.state.artist.mbid + '/album/' + albummbid);
    }
    getBreadcrumbs(mbid, artist, album){
        return [{href: null, text: artist}];
    }
    render(){
        const {bio, image, ontour, stats, name:artistName, url} = this.state.artist;
        let links = this.getBreadcrumbs(this.props.params.mbid, artistName);

        // Quick hack to add blank target - not clever
        let summary = bio && bio.summary || '';
        summary = summary.replace('<a href', '<a target="_blank" href');

        return(
            <div>
                <Breadcrumbs links={links}/>
                <div className="row">
                    <div className="large-12 columns">
                        <div className="media-object stack-for-small">
                          <div className="media-object-section">
                            <div className="thumbnail">
                              <image src={image && image[3]['#text']} />
                            </div>
                          </div>
                          <div className="media-object-section">
                            <h4>{artistName} {ontour === "1" && <span className="label float-right">On Tour</span>}</h4>
                            <p dangerouslySetInnerHTML={{__html: summary && summary}}></p>
                            <p>
                                <strong>Listeners:</strong> {stats && stats.listeners}
                                <br />
                                <strong>Play Count:</strong> {stats && stats.playcount}
                            </p>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 medium-6 columns">
                          <Similar
                            artist={this.state.artist}
                            similarArtist={this.getSimilar.bind(this)}
                             />
                    </div>
                    <div className="small-12 medium-6 columns">
                        <Albums
                            albums={this.state.albums}
                            albumInfo={this.getAlbumInfo.bind(this)}
                             />
                    </div>
                </div>
            </div>
        )
    }
}

export default Artist;