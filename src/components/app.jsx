import React from 'react';
import { Link } from 'react-router';

import Dashboards from './dashboards';
import Dashboard from './dashboard';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <Link to="/dashboards">Dashboards</Link>

                {this.props.children}
            </div>
        );
    }
}

export default App;