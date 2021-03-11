import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {Link} from 'react-router-dom';

const query = gql`
    {
        songs{
            title
            id
        }
    }
`;

class SongList extends React.Component {

    renderSongs(){
        return this.props.data.songs.map(song => {
            return(
                <li key={song.id} className="collection-item">
                    {song.title}
                </li>
            )
        })
    }

    render(){
        if (this.props.data.songs == undefined){
            return (<div>Loading...</div>)
        } else {
            return(
                <div>
                    <h1>SongList</h1>
                    <br />
                    <ul className="collection">
                        {this.renderSongs()}
                    </ul>
                    <Link to="/songs/new"
                        className="btn-floating brn-large red right">
                        
                       <i className="material-icons">add</i>
                    </Link>
                </div>
            )
        }
    }

}



export default graphql(query)(SongList);