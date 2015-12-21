import React from 'react';
import SimilarList from './SimilarList';

const Similar = ({artist, similarArtist}) => {
    return(
        <div>
            <h3>Similar Artists</h3>
            <SimilarList artist={artist} similarArtist={similarArtist} />
        </div>
    )
};

Similar.propTypes = {
        artist: React.PropTypes.object.isRequired,
        similarArtist: React.PropTypes.func.isRequired
}

export default Similar;