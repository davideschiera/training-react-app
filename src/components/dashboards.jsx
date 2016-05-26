import React from 'react';
import { Link } from 'react-router';

export default class Dashboards extends React.Component {
    componentWillMount() {
        this.setState({
            dashboards: [
                { id: 1, name: 'Something' },
                { id: 2, name: 'Else' }
            ]
        });
    }

    render() {
        return (
            <div>
                <h2>Dashboards</h2>
                <ul>{this.renderLinks()}</ul>

                {this.props.children}
            </div>
        );
    }

    renderLinks() {
        return this.state.dashboards.map(dashboard => (
            <li key={dashboard.id}>
                <Link to={`/dashboards/${dashboard.id}`}>{dashboard.id} - {dashboard.name}</Link>
            </li>
        ));
    }
}