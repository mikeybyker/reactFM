import React from 'react';
import AlbumList from './AlbumList';

const Albums = ({albums, albumInfo}) => {
    return(
        <div>
            <h3>Popular Albums</h3>
            <AlbumList albums={albums} albumInfo={albumInfo}/>
        </div>
    )
};

Albums.propTypes = {
    albums: React.PropTypes.array.isRequired,
    albumInfo: React.PropTypes.func.isRequired
}

export default Albums;