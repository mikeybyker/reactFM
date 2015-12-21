import React from 'react';


const AlbumList = ({ albums, albumInfo}) => {

    /*
    Can remove those without a mbid - which are useless for links..but nice to show...So I'm just hiding link button
    var filtered = albums.filter(function(o){
        return o.mbid;
    });
    */

    return (
        <ul className="list-group">
            { albums.map((album, index) => (
                <li className="no-bullet album-list" key={index}>
                    <div className="media-object stack-for-small">
                        <div className="media-object-section">
                            <div className="thumbnail">
                                <a className="thumbnail text-center" href={album.url} target="_blank">
                                    <image src={album.image && album.image[2]['#text'] ? album.image[2]['#text'] : 'http://placehold.it/174x174'} />
                                </a>
                            </div>
                        </div>
                        <div className="media-object-section">
                            <div className="row">
                                <div className="small-12 columns">
                                    {album.mbid && 
                                        <button className="button success hollow small" onClick={()=>albumInfo(album.mbid)}>
                                            {album.name}
                                        </button>
                                    }
                                </div>
                                <div className="small-12 columns">
                                    <a className="primary small button hollow" href={'http://www.amazon.co.uk/s/ref=as_li_qf_sp_asin_il_tl?url=search-alias%3Daps&tag=sinisterwaltz-21&field-keywords=' + album.artist.name + '+' + album.name} target="_blank">Buy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}                
        </ul>
    )
};

export default AlbumList