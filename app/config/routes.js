import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Artist from '../components/LastFM/Artist';
import AlbumInfo from '../components/LastFM/AlbumInfo';
import SearchResults from '../components/LastFM/SearchResults';
import {Route, IndexRoute} from 'react-router';

export default (
    <Route path="/" component={Main}>
        <Route path="results/:searchterm" component={SearchResults} />
        <Route path="artist/:mbid" component={Artist} />
        <Route path="artist/:mbid/album/:albummbid" component={AlbumInfo} />
        <IndexRoute component={Home} />
    </Route>
);