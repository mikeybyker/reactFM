import React from 'react';
import SearchLastFM from './SearchLastFM';
import SearchResults from './LastFM/SearchResults';
import searchLastFMArtist from '../utils/music';
import ScreenInfo from '../utils/ScreenInfo';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Main';
        this.state = {
            artists: []
        }
    }
    doSearch(searchterm){
        this.props.history.pushState(null, '/results/' + encodeURIComponent(searchterm));
    }
    showArtist(mbid){
        this.props.history.pushState(null, '/artist/' + mbid);
    }
    render() {
        return (
            <div>
                {/* Nav bar */}
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li className="menu-text">ReactFM</li>
                            <li className="">
                                <a href="#">Home</a>
                            </li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <SearchLastFM history={history} searchArtist={(searchname) => this.doSearch(searchname)}/>
                    </div>
                </div>
                {/*Just for screen size/orientation info*/}
                <ScreenInfo />
                {/*Children components...*/}
                <div className="">
                  {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;