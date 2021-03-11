import './style/style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link, useParams} from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";


import SongList from './components/songlist';
import SongDetail from './components/songdetail';
import SongCreate from './components/songcreate';
import App from './components/app';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  cache,
  link
});


// :id comes from props.params


const Root = () => {
  return (
    <ApolloProvider client={client} > 
      <HashRouter>
        <App>
          <Route exact path="/" component={SongList} />
          <Route exact path="/songs/new" component={SongCreate} />
          <Route exact path="/songs/:id" component={SongDetail} /> 
        </App>
      </HashRouter>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector("#root")
);
