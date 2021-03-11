import React from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import query from '../queries/fetchSongs'
import { Link } from 'react-router-dom';

const mutation = gql`
mutation AddSong($title:String){
    addSong(title: $title){
        id
        title
    }
}
`;

class SongCreate extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title:''
        }

    }

    onSubmit(e){
        e.preventDefault();

        this.props.mutate({
            variables:{
                title: this.state.title
            },
            refetchQueries:[{query}]
        }).then(()=> this.props.history.push("/"))
        
    }

    render(){
        return(
            <div>
                <Link to="/">Back</Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input 
                    onChange={ e => this.setState({ title: e.target.value }) }
                    value={this.state.title}
                    />

                </form>
            </div>
        )
    }
}

export default graphql(mutation)(SongCreate);