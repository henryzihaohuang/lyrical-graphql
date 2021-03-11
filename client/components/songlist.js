import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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
                    {this.renderSongs()}
                </div>
            )
        }
    }

}



export default graphql(query)(SongList);