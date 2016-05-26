import React from 'react';

export default class Dashboards extends React.Component {
    render() {
        return (
            <div>
                <h2>Dashboards</h2>
                <ul>
                    <li><a href="/#/dashboards/1">1 - Something</a></li>
                    <li><a href="/#/dashboards/2">2 - Else</a></li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}