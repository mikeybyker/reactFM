import React from 'react';
import Router from 'react-router';

class SearchLastFM extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SearchLastFM';
    }
    getRef(ref){
        this.searchname = ref;
    }
    handleSubmit(){
        const searchname = this.searchname.value;
        this.searchname.value = '';
        this.props.searchArtist(searchname);
    }
    render() {
        return (
           <form className="navbar-form navbar-right" onSubmit={() => this.handleSubmit()}> 
                <ul className="menu">
                    <li>
                        <input type="search" placeholder="Search Artists" className="form-control" ref={(ref) => this.getRef(ref)}/>
                    </li>
                    <li>
                        <button type="submit" className="button">Search Last.fm</button>
                    </li>
                </ul>
            </form>     
        )
    }
}

SearchLastFM.propTypes = {
    history: React.PropTypes.object.isRequired,
    searchArtist: React.PropTypes.func.isRequired
}

export default SearchLastFM;