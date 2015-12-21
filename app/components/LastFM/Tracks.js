import React from 'react';
import TrackList from './TrackList';

const Tracks = ({tracks}) => {
    return(
        <div>
            <h5>Tracks</h5>
            <TrackList tracks={tracks} />
        </div>
    )
};

Tracks.propTypes = {
    tracks: React.PropTypes.array.isRequired
}

export default Tracks;