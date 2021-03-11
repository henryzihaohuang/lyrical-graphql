import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import fetchSong from '../queries/fetchSongDetails';
import LyricCreate from './lyriccreate';
import LyricList from './lyriclist';


class SongDetail extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <Link to="/">Back</Link>
                <h3>Song Detail</h3>

                <Query 
                    query={fetchSong}
                    variables={{id:this.props.match.params.id}}
                >
                    {
                        ({loading, error, data}) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error :( Please try again</p>
                            
                            return (
                                <div>
                                    <p>{data.song.title}</p> 
                                    <LyricList lyrics={data.song.lyrics} />
                                    <LyricCreate songId={this.props.match.params.id} />
                                </div>
                            )
                        }
                    }
                </Query>
                

            </div>
        );
    }
}

export default (SongDetail);