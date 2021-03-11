import React from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSongs';

const mutation = gql`
  mutation DeleteSong($id: ID){
    deleteSong(id: $id) {
      id
    }
  }
`;

class SongList extends React.Component {
    onSongDelete(id){
        this.props.mutate({
            variables: { id: id },
            //refetchQueries: [{ query }]
        }).then(()=> this.props.data.refetch());
    }

    renderSongs(){
        return this.props.data.songs.map(({id,title}) => {
            return(
                <li key={id} className="collection-item">
                    <Link to={`/songs/${id}`}>{title}</Link> <i className="material-icons" onClick={(()=> this.onSongDelete(id))}>delete</i>
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

export default graphql(mutation)(
    graphql(query)(SongList)
);