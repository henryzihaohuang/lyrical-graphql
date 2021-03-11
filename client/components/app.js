import React from 'react';


const App = (props) => {
    return (
        <div className="container">
            <h3>Lyrical Song Builder</h3>
            {props.children}
        </div>
    );
};

export default App;