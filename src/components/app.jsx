import React from 'react';

import Dashboards from './dashboards';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <Dashboards  />
            </div>
        );
    }
}

export default App;