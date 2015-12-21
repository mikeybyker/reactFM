import React from 'react';

const TrackList = ({ tracks}) => {
    var getDuration = function(duration){
        let mins = ~~(duration / 60),
            secs = duration % 60,
            pretty = '';
        pretty += '' + mins + ':' + (secs < 10 ? '0' : '');
        pretty += '' + secs;
        return pretty;
    }
    return (
        <ol className="track-list">
            { tracks.map((track, index) => (
                <li key={index}>
                    <a href={track.url} target="_blank">{track.name}</a> ({getDuration(track.duration)})
                </li>
            ))}                
        </ol>
    )
};

export default TrackList