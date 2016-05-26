import React from 'react';

import Dashboards from './dashboards';
import Dashboard from './dashboard';

class App extends React.Component {
    render() {
        var id = 1;
        var name = "Something";

        return (
            <div>
                <h1>Welcome!</h1>
                <Dashboards>
                    <Dashboard id={id} name={name} />
                </Dashboards>
            </div>
        );
    }
}

export default App;