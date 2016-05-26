import React from 'react';

export default class Dashboards extends React.Component {
    render() {
        return (
            <div>
                <h2>Dashboards</h2>
                <ul>
                    <li><a>1 - Something</a></li>
                    <li><a>2 - Else</a></li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}