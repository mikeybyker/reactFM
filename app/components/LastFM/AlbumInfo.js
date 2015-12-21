import React from 'react';
import LastFM from '../../utils/music';
import Breadcrumbs from '../../utils/Breadcrumbs';
import Tracks from './Tracks';

class AlbumInfo extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AlbumInfo';
        this.state = {
            album: {},
            tracks: [],
            error: false
        }
    }
    componentDidMount() {
        this.init(this.props.params.albummbid);
    }
    getBreadcrumbs(mbid, artist, album){
        return [{href: '#/artist/' + mbid, text: artist},
                {href: null, text: album}];
    }
    init(albummbid){

        LastFM.getAlbumInfo(albummbid)
        .then(function(results){
            console.log('getAlbumInfo > ::: ', results);
            let data = results.data,
                error = !!data.error, // could use data.message...
                album =  error ? {} : data.album,
                tracks =  error ? [] : album.tracks.track;
            // console.log('Is error ? %s', error);
            this.setState({
                album: album,
                tracks: tracks,
                error: error
            });

        }.bind(this), function(reason){
            console.log('Error ::: ', reason);
        });
    }
    render() {
        let links = [];
        if(this.state.error){
            return (
                <div>
                    <Breadcrumbs links={links}/>
                    <div className="row">
                        <div className="large-12 columns">
                            <p>
                              Looks like Last.fm does not have any information about this album...
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        const {artist, image, mbid, name:albumName, tracks, url, playcount, listeners} = this.state.album;
        links = this.getBreadcrumbs(this.props.params.mbid, artist, albumName);

        return (
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
                            <h4>{albumName}</h4>
                            <Tracks tracks={this.state.tracks} />
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumInfo;