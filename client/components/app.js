import React from 'react';


const App = (props) => {
    return (
        <div className="container">
            <h3>Welcome to Lyrical: a song builder</h3>
            {props.children}
        </div>
    );
};

export default App;