import React from 'react';

class SimilarList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SimilarList';
    }
    render() {
        const similarArray = this.props.artist.similar ? this.props.artist.similar.artist : [];
        return <ul className="list-group">
            { similarArray.map((similar, index) => (
                <li className="no-bullet album-list" key={index}>
                    <div className="media-object">
                        <div className="media-object-section">
                            <div className="thumbnail">
                                <a className="thumbnail text-center" href={similar.url} target="_blank">
                                    <image src={similar.image && similar.image[2]['#text']} />
                                </a>
                            </div>
                        </div>
                        <div className="media-object-section">
                            <button className="button success hollow small" onClick={()=>this.props.similarArtist(similar.name)}>
                                {similar.name}
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    }
}

SimilarList.propTypes = {
    similarArtist: React.PropTypes.func.isRequired
}
export default SimilarList;