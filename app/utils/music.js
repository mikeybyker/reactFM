import axios from 'axios';
import keys from '../config/keys';

function searchArtists(artist){
    return axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&format=json&limit=5&api_key=${keys.lastfm}`);
}
// From similar artist - so the name is set by last.fm - so no need to search
function getArtistByName(artist){
    return axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${artist}&format=json&limit=1&api_key=${keys.lastfm}`);
}
function getArtistInfo(mbid){
    return axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&mbid=${mbid}&format=json&api_key=${keys.lastfm}`);
}
function getTopAlbums(mbid){
    return axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&mbid=${mbid}&format=json&limit=10&api_key=${keys.lastfm}`);
}
function getAlbumInfo(mbid){
    return axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getInfo&mbid=${mbid}&format=json&api_key=${keys.lastfm}`);
}
const LastFM = {
    searchLastFMArtist: function(artist){
        // console.log('searchLastFMArtist ::: ', artist);
        return searchArtists(artist);
    },
    getSimilarArtist: function(artist){
        // console.log('getArtist ::: ', artist);
        return getArtistByName(artist);
    },
    getArtistInfo: function(mbid){
        // console.log('getArtistInfo ::: ', mbid);
        return getArtistInfo(mbid);
    },
    getTopAlbums: function(mbid){
        // console.log('getTopAlbums ::: ', mbid);
        return getTopAlbums(mbid);
    },
    getAllArtist: function(mbid){
        // console.log('getAllArtist ::: ', mbid);
        return axios.all([getArtistInfo(mbid), getTopAlbums(mbid)])
        .then((arr) =>({artist: arr[0].data.artist, albums: arr[1].data.topalbums.album}));
    },
    getAllArtistByName: function(artist){
        // console.log('getAllArtistByName ::: ', artist);
        return getArtistByName(artist)
                .then(function(result){
                    let artist = result.data.artist;
                    return axios.all([getArtistInfo(artist.mbid), getTopAlbums(artist.mbid)]);
                })
                .then((arr) =>({artist: arr[0].data.artist, albums: arr[1].data.topalbums.album}));
    },
    getAlbumInfo: function(mbid){
        // console.log('getAlbumInfo ::: ', mbid);
        return getAlbumInfo(mbid);
    }
}

export default LastFM;