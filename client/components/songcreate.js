import React from 'react';
import gql from 'graphql-tag'

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

    }

    render(){
        return(
            <div>
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

export default SongCreate;