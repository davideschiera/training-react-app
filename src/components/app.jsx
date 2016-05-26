import React from 'react';

import Dashboards from './dashboards';
import Dashboard from './dashboard';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [1, 2, 3]
        };
    }

    render() {
        var id = 1;
        var name = "Something";

        return (
            <div>
                <h1>Welcome!</h1>
                <a href="/#/dashboards">Dashboards</a>
                <Dashboards>
                    <Dashboard id={id} name={name} data={this.state.data} reload={this.reload.bind(this)} />
                </Dashboards>
            </div>
        );
    }

    reload() {
        this.setState({
            data: this.state.data.map(val => val + 1)
        });
    }
}

export default App;